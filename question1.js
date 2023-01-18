const CalculateScoreOfGame = (arr) => {

    let strikeScore = 0, spareScore = 0, openScore = 0
    let strikeFlag=0,spareFlag=0

    arr.forEach((frame) => {
        //console.log(frame)
        if (frame[0] ===10) {
            strikeScore += 10
            strikeFlag = 1
        }
        else if (frame[0] + frame[1] === 10) {
            if (strikeFlag === 1) {
                strikeScore += frame[0] + frame[1]
                strikeFlag = 0
            }
            spareScore += 10
            spareFlag = 1
        }
        else {
            console.log(frame)
            if (strikeFlag === 1) {
                strikeScore += frame[0] + frame[1]
                strikeFlag = 0
            }
            if (spareFlag === 1) {
                spareScore += frame[0]
                spareFlag = 0
            }
            openScore += frame[0] + frame[1]
        }

    })

    return spareScore+strikeScore+openScore
}

//console.log(CalculateScoreOfGame([[1,2],[3,4],[5,4],[4,3],[3,3],[2,3],[4,5],[5,2],[3,3],[3,2]]))

module.exports = {CalculateScoreOfGame}