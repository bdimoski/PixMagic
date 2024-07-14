import { Document, model, models, Schema } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  email: string;
  username: string;
  photo: string;
  firstName: string;
  lastName: string;
  planId: number;
  creditBalance: number;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  photo: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  planId: { type: Number, required: true },
  creditBalance: { type: Number, required: true },
});

const User = models?.User || model("User", UserSchema);

export default User;
