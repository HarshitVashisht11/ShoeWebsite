const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage}) => {
const handleClick =()=>{
    if(bigShoeImg !== imgURL.bigShoe){
        changeBigShoeImage(imgURL,bigShoe)
    }
}
  return (
    <div className= {`border-2 rounded-xl ${bigShoeImage === imgURL
        ?'border-coral-red'
    : 'border-transparent' } cursor-pointer max-sm:flex-1`}onClick={handleClick}>ShoeCard</div>
  )
}

export default ShoeCard