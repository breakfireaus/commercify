import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
    {
    reviewName: {type: String, required: true},
    rating: {type: Number, required: true},
    comment: Name: {type: String, required: true},
}, 
{
    timestamps: true,
}
)

const userSchema = mongoose.Schema(
  {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
    Name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },    
    description: {
        type: String,
        required: true,
      },    
    rating: {
        type: Number,
        required: true,
        default: 0
      },
      numReviews: {
        type: Number,
        required: true,
        default: 0
      },
      reviews:[review]
      price: {
        type: Number,
        required: true,
        default: 0
      },
      countInStock: {
        type: Number,
        required: true,
        default: 0
      }, 

  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('User', userSchema)

export default User
