import mongoose from 'mongoose';
const schema = new mongoose.Schema({ participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }], originalMessage: { type: mongoose.Schema.Types.ObjectId, ref: 'Message', required: true, unique: true } }, { timestamps: true });
export default mongoose.model('Conversation', schema);
