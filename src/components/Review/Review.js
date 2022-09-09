import React, {useState,useEffect} from 'react'
import Reviewcard from './Reviewcard'
import "../Review/Review.css"
import Reviewform from '../Reviewform/Reviewform'

const review_url = "http://localhost:9292/arts/reviews"

function Review() {

        const [reviews,setReviews] = useState([])
        const myreviewfetcher = ()=>{
          fetch(review_url)
          .then((res)=>res.json())
          .then((reviews)=>setReviews(reviews))
        };

        useEffect(myreviewfetcher,[])

        
      
        
        let reviewcard = reviews.map((review)=>(
          <Reviewcard key={review.id} ReviewUserId={review.user_id} ReviewArtId={review.art_id} ReviewComment={review.comment} ReviewRating={review.rating} />
        ))

        // Creating a function to update movies when the adding forms is triggered

        function addingReviews(newReviews){
          const updatedReviews = [...reviews,newReviews]
          setReviews(updatedReviews)}

  return (
    <div className='backgroundReview'>

    <div className='backgroundReviewCard'>

      <div className='reviewContainer'>
    { reviewcard}
    </div>

    </div>
    <div className='backgroundReviewForm'>
      {/* Where my form lives */}
      <div className='reviewformbackground'> <Reviewform onAddingReviews={addingReviews}/></div>

    </div>

    </div>
  )
}

export default Review