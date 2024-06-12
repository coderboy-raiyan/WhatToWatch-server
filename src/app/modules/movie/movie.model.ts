import { Schema, model } from 'mongoose';
import { TMovie } from './movie.interface';

const movieSchema = new Schema<TMovie>({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: Date,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    viewCount: {
        type: Number,
        default: 0,
    },
    totalReviews: {
        type: Number,
        default: 0,
    },
    thumbnail: {
        type: String,
        default: '',
    },
});

movieSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});

const Movie = model<TMovie>('Movie', movieSchema);

export default Movie;