import MongoStore from "connect-mongo";

export const sessionOptions = {
  secret: String(process.env.SESSION_SECRET),
  resave: false,
  saveUninitialized: false,
  rolling: true,
  name: process.env.SESSION_NAME,
  store: MongoStore.create({
    mongoUrl: `${process.env.DB_CONNECTION}`,
    collectionName: "sessions",
  }),
  cookie: {
    maxAge: Number(process.env.SESSION_MAX_AGE),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};
