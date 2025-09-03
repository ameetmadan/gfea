import { FC } from "react";
import styles from "./rating.module.css";
import RatingStarSvg from "@/components/ratingStar/RatingStarSvg";

export interface ratingProps {
    rating: number;
    ratingCount: number;
}

function ratingEvaluator(rating: number) {
    return rating.toString().split(".")
}
 
const Rating: FC<ratingProps> = ({ rating, ratingCount }) => {
    console.log(ratingEvaluator(rating))
    return <div className={styles.rating}>
        <RatingStarSvg fill={} />
        <RatingStarSvg fill={hasDecimal(rating) ? "full" : "half"} />
        <RatingStarSvg fill={hasDecimal(rating) ? "full" : "half"} />
        <RatingStarSvg fill={hasDecimal(rating) ? "full" : "half"} />
        <RatingStarSvg fill={hasDecimal(rating) ? "full" : "half"} />
        <div>{ratingCount}</div>
    </div>;
};

export default Rating;
