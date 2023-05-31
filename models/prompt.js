const { default: mongoose, Schema, models } = require('mongoose')

const PromptSchema = mongoose.Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  prompt: {
    type: String,
    required: [true, 'Prompt is required'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required'],
  },
})

export const Prompt = models.Prompt || mongoose.model('Prompt', PromptSchema)
