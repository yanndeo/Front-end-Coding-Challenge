
export const formatNumber = (num ) =>{
    
    let stars;
    //console.log(num)

    if (num.toString().length > 3) {

        stars = num / 1000;

        stars.toFixed()

        return stars = `${stars.toFixed()}K`;

        //console.log(stars)

    } else {

        return  stars = num;
    }

}