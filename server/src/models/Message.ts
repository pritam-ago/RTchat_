import mongoose, { Document, Schema } from 'mongoose';

export interface IMessage extends Document {
  roomId: string;
  senderId: string;
  content: string;
  type: 'text' | 'image' | 'file';
  fileUrl?: string;
  readBy: string[];
}

const messageSchema = new Schema<IMessage>(
  {
    roomId: { type: String, required: true },
    senderId: { type: String, required: true },
    content: { type: String, required: true },
    type: { type: String, enum: ['text', 'image', 'file'], default: 'text' },
    fileUrl: { type: String },
    readBy: [{ type: String }],
  },
  { timestamps: true }
);

// Index for faster queries
messageSchema.index({ roomId: 1, createdAt: -1 });

export const Message = mongoose.model<IMessage>('Message', messageSchema); 