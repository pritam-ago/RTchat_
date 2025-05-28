import mongoose, { Document, Schema } from 'mongoose';

export interface IRoom extends Document {
  name: string;
  type: 'private' | 'group';
  participants: string[];
  lastMessage?: {
    content: string;
    senderId: string;
    timestamp: Date;
  };
  createdBy: string;
}

const roomSchema = new Schema<IRoom>(
  {
    name: { type: String, required: true },
    type: { type: String, enum: ['private', 'group'], required: true },
    participants: [{ type: String, required: true }],
    lastMessage: {
      content: String,
      senderId: String,
      timestamp: Date,
    },
    createdBy: { type: String, required: true },
  },
  { timestamps: true }
);

// Index for faster queries
roomSchema.index({ participants: 1 });
roomSchema.index({ type: 1, participants: 1 });

export const Room = mongoose.model<IRoom>('Room', roomSchema); 