const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');
const recruiterRouter = require('./routes/recruiterRoutes');
const ErrorRoutes = require('./utils/errorRoutues');

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(
  cors({
    origin: "https://testingjob.netlify.app",
    credentials: true,
  })
);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/recruiter', recruiterRouter);
app.use(ErrorRoutes);

module.exports = app;