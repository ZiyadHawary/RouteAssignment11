import mongoose from 'mongoose';
const schema = new mongoose.Schema({ message: { type: mongoose.Schema.Types.ObjectId, ref: 'Message', required: true }, requester: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' } }, { timestamps: true });
schema.index({ message: 1, requester: 1 }, { unique: true });
export default mongoose.model('Request', schema);
