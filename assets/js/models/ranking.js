class Ranking{

    constructor(){

        this.topScoreList = [

            { name: 'name', score: 0},
            { name: 'name', score: 0}, 
            { name: 'name', score: 0}, 
            { name: 'name', score: 0}, 
            { name: 'name', score: 0}, 
            { name: 'name', score: 0}, 
            { name: 'name', score: 0}, 
            { name: 'name', score: 0}, 
            { name: 'name', score: 0}, 
            { name: 'name', score: 0}
        ]

        this.objectToTest = {
            name: "nameTest",
            score: 0
        }

        this.scoreList = document.querySelectorAll('.top10-score')
    }

    updateTest(scoreTest){

        this.topScoreList = [

            { name: document.getElementById("top1-id-name").innerHTML, score: document.getElementById("top1-id-score").innerHTML },
            { name: document.getElementById("top2-id-name").innerHTML, score: document.getElementById("top2-id-score").innerHTML },
            { name: document.getElementById("top3-id-name").innerHTML, score: document.getElementById("top3-id-score").innerHTML },
            { name: document.getElementById("top4-id-name").innerHTML, score: document.getElementById("top4-id-score").innerHTML },
            { name: document.getElementById("top5-id-name").innerHTML, score: document.getElementById("top5-id-score").innerHTML },
            { name: document.getElementById("top6-id-name").innerHTML, score: document.getElementById("top6-id-score").innerHTML },
            { name: document.getElementById("top7-id-name").innerHTML, score: document.getElementById("top7-id-score").innerHTML },
            { name: document.getElementById("top8-id-name").innerHTML, score: document.getElementById("top8-id-score").innerHTML },
            { name: document.getElementById("top9-id-name").innerHTML, score: document.getElementById("top9-id-score").innerHTML },
            { name: document.getElementById("top10-id-name").innerHTML, score: document.getElementById("top10-id-score").innerHTML }
        ]


        this.objectToTest.score = scoreTest;
        this.objectToTest.name = document.getElementById('data-name').innerHTML;

        this.setTop10Ranking(this.objectToTest.name)
    }

    setTop10Ranking(){

        this.topScoreList.push(this.objectToTest)

        this.topScoreList.sort(function (a,b){
            return  b.score - a.score;
            });

        this.topScoreList.pop()

        this.setRankingStats()

    
    }

    
    setRankingStats(){

       document.getElementById("top1-id-score").innerHTML = this.topScoreList[0].score
       document.getElementById("top2-id-score").innerHTML = this.topScoreList[1].score
       document.getElementById("top3-id-score").innerHTML = this.topScoreList[2].score
       document.getElementById("top4-id-score").innerHTML = this.topScoreList[3].score
       document.getElementById("top5-id-score").innerHTML = this.topScoreList[4].score
       document.getElementById("top6-id-score").innerHTML = this.topScoreList[5].score
       document.getElementById("top7-id-score").innerHTML = this.topScoreList[6].score
       document.getElementById("top8-id-score").innerHTML = this.topScoreList[7].score
       document.getElementById("top9-id-score").innerHTML = this.topScoreList[8].score
       document.getElementById("top10-id-score").innerHTML = this.topScoreList[9].score

        document.getElementById("top1-id-name").innerHTML = this.topScoreList[0].name
        document.getElementById("top2-id-name").innerHTML = this.topScoreList[1].name
        document.getElementById("top3-id-name").innerHTML = this.topScoreList[2].name
        document.getElementById("top4-id-name").innerHTML = this.topScoreList[3].name
        document.getElementById("top5-id-name").innerHTML = this.topScoreList[4].name
        document.getElementById("top6-id-name").innerHTML = this.topScoreList[5].name
        document.getElementById("top7-id-name").innerHTML = this.topScoreList[6].name
        document.getElementById("top8-id-name").innerHTML = this.topScoreList[7].name
        document.getElementById("top9-id-name").innerHTML = this.topScoreList[8].name
        document.getElementById("top10-id-name").innerHTML = this.topScoreList[9].name

        this.saveLocalStorage();
    }

    saveLocalStorage(){

        localStorage.setItem('top1', document.getElementById("top1-id-score").innerHTML);
        localStorage.setItem('top2', document.getElementById("top2-id-score").innerHTML);
        localStorage.setItem('top3', document.getElementById("top3-id-score").innerHTML);
        localStorage.setItem('top4', document.getElementById("top4-id-score").innerHTML);
        localStorage.setItem('top5', document.getElementById("top5-id-score").innerHTML);
        localStorage.setItem('top6', document.getElementById("top6-id-score").innerHTML);
        localStorage.setItem('top7', document.getElementById("top7-id-score").innerHTML);
        localStorage.setItem('top8', document.getElementById("top8-id-score").innerHTML);
        localStorage.setItem('top9', document.getElementById("top9-id-score").innerHTML);
        localStorage.setItem('top10', document.getElementById("top10-id-score").innerHTML);

        localStorage.setItem('name1', document.getElementById("top1-id-name").innerHTML);
        localStorage.setItem('name2', document.getElementById("top2-id-name").innerHTML);
        localStorage.setItem('name3', document.getElementById("top3-id-name").innerHTML);
        localStorage.setItem('name4', document.getElementById("top4-id-name").innerHTML);
        localStorage.setItem('name5', document.getElementById("top5-id-name").innerHTML);
        localStorage.setItem('name6', document.getElementById("top6-id-name").innerHTML);
        localStorage.setItem('name7', document.getElementById("top7-id-name").innerHTML);
        localStorage.setItem('name8', document.getElementById("top8-id-name").innerHTML);
        localStorage.setItem('name9', document.getElementById("top9-id-name").innerHTML);
        localStorage.setItem('name10', document.getElementById("top10-id-name").innerHTML);
        
    }

    getLocalStorage(){

        document.getElementById("top1-id-score").innerHTML = localStorage.getItem('top1');
        document.getElementById("top2-id-score").innerHTML = localStorage.getItem('top2');
        document.getElementById("top3-id-score").innerHTML = localStorage.getItem('top3');
        document.getElementById("top4-id-score").innerHTML = localStorage.getItem('top4');
        document.getElementById("top5-id-score").innerHTML = localStorage.getItem('top5');
        document.getElementById("top6-id-score").innerHTML = localStorage.getItem('top6');
        document.getElementById("top7-id-score").innerHTML = localStorage.getItem('top7');
        document.getElementById("top8-id-score").innerHTML = localStorage.getItem('top8');
        document.getElementById("top9-id-score").innerHTML = localStorage.getItem('top9');
        document.getElementById("top10-id-score").innerHTML = localStorage.getItem('top10');

        document.getElementById("top1-id-name").innerHTML = localStorage.getItem('name1'); 
        document.getElementById("top2-id-name").innerHTML = localStorage.getItem('name2'); 
        document.getElementById("top3-id-name").innerHTML = localStorage.getItem('name3'); 
        document.getElementById("top4-id-name").innerHTML = localStorage.getItem('name4'); 
        document.getElementById("top5-id-name").innerHTML = localStorage.getItem('name5'); 
        document.getElementById("top6-id-name").innerHTML = localStorage.getItem('name6'); 
        document.getElementById("top7-id-name").innerHTML = localStorage.getItem('name7'); 
        document.getElementById("top8-id-name").innerHTML = localStorage.getItem('name8'); 
        document.getElementById("top9-id-name").innerHTML = localStorage.getItem('name9'); 
        document.getElementById("top10-id-name").innerHTML = localStorage.getItem('name10');
        

    }
    

}