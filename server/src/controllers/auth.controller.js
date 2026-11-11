import authModel from "../models/auth.models.js";
import bcrypt from "bcryptjs";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils/auth.js";

// register api
export const register = async (req, res) => {
  try {
    const { name, email, passwordHash } = req.body;

    const isEmail = await authModel.findOne({ email });

    if (isEmail) {
      return res.status(400).json({
        message: "User already exists with this email address",
        error: [
          {
            path: "email",
            msg: "User already exists with this email address",
          },
        ],
      });
    }

    const user = await authModel.create({
      name,
      email,
      passwordHash: await bcrypt.hash(passwordHash, 10),
      role: "user",
    });

    const accessToken = generateAccessToken({
      userId: user._id,
      role: user.role,
    });

    const refreshToken = generateRefreshToken({
      userId: user._id,
      role: user.role,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });

    // add refresh token to the database
    await authModel.findByIdAndUpdate(user._id, {
      refreshToken,
    });

    return res.status(201).json({
      message: "register user successfully",

      data: {
        user: {
          name: user.name,
          email: user.email,
          id: user._id,
        },
        accessToken,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// login api
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await authModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalaid email or password",
      });
    }

    const isPasswordValidation = await bcrypt.compare(
      password,
      user.passwordHash,
    );

    if (user.role === "admin" && user.access === false) {
      return res.status(403).json({
        message: "Your admin access has been restricted",
      });
    }

    if (!isPasswordValidation) {
      return res.status(401).json({
        message: "Invalaid email or password",
        errors: [
          {
            path: "login",
            msg: "Invalaid email or password",
          },
        ],
      });
    }
    const accessToken = generateAccessToken({
      userId: user._id,
      role: user.role,
    });

    const refreshToken = generateRefreshToken({
      userId: user._id,
      role: user.role,
    });

    await authModel.findOneAndUpdate(
      { email },
      {
        refreshToken,
      },
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });

    return res.status(200).json({
      message: "Login successfully",
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        accessToken,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// refresh token api
export const refresh = async (req, res) => {
  const { refreshToken } = req.cookies;

  // edge case 1 - check if refresh token exist or not
  if (!refreshToken) {
    return res.status(400).json({
      message: "Refresh token missing. Please login again",
    });
  }

  try {
    // edge case 2 - refresh token is valaid or not
    const refreshTokenVerify = verifyRefreshToken(refreshToken);

    // edge case 3 - find the user refrshtoken in database and match it with the current refreshtoken if it dont match then refreshToken = null
    const { userId, role } = refreshTokenVerify;
    const user = await authModel.findById(userId);

    // check user exist or not
    if (!user) {
      return res.status(401).json({
        message: "User not found. Please login again",
      });
    }

    if(user.role === "admin" && user.access === false){
      await authModel.findByIdAndUpdate(user._id , {refreshToken:null})

      return res.status(403).json({
        message: "Your admin access has been restricted"
      })
    }

    //  if(refreshToken !== user.refreshToken){
    //     return res.status(401).json({
    //         message:"refrsh token mismatch"
    //     })
    //  } -> according to chatgpt

    if (refreshToken !== user.refreshToken) {
      // this edgcase according to mentor
      await authModel.findByIdAndUpdate(user._id, {
        refreshToken: null,
      });

      return res.status(401).json({
        message: "Refresh token mismatch",
      });
    }

    const accessToken = generateAccessToken({ userId, role });
    const newRefreshToken = generateRefreshToken({ userId, role });

    await authModel.findByIdAndUpdate(user._id, {
      refreshToken: newRefreshToken,
    });

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
    });

    res.status(200).json({
      message: "token refreshed successfully",
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },

        accessToken,
      },
    });
  } catch (error) {
    res.status(401).json({
      message: "Invalid refresh token",
    });
  }
};

// getme api
export const getme = async (req, res) => {
  const { userId, role } = req.user;

  try {
    const user = await authModel.findById(userId);

    if (!user) {
      return res.status(401).json({
        message: "user not found",
      });
    }
    res.status(200).json({
      message: "User data is fatched successfully",

      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
    });
  } catch (error) {}
};
