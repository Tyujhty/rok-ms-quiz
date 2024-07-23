import { Schema, Document } from 'mongoose';

export const TestSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

export interface Test extends Document {
  question: string;
  answer: string;
}
