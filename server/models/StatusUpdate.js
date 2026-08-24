import mongoose from 'mongoose';

const statusUpdateSchema = new mongoose.Schema({
  time: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
}, { timestamps: true });

const StatusUpdate = mongoose.models.StatusUpdate || mongoose.model('StatusUpdate', statusUpdateSchema);
export default StatusUpdate;
