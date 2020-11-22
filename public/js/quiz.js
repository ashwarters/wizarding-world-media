const resultsHandler = function(event) {
    event.preventDefault();

    const results = [];

    for (let i = 1; i <= 10; i++) {
        let checkboxes = document.querySelector(`input[name="q${i}"]:checked`).value
        results.push(checkboxes)
        console.log(checkboxes);
    }
    console.log(results)
    const houseCount = function(arr) {
        const houseMap = {};

        for (var i = 0; i < arr.length; i++) {
            const houseAnswer = arr[i];

            if (houseAnswer in houseMap) {
                houseMap[houseAnswer]++;
            } else {
                houseMap[houseAnswer] = 1;
            }
        }

        return houseMap;
    };
    console.log(houseCount(results));
    let newOb = houseCount(results);

    let selectedHouseId = 0;

    if (newOb['slytherin'] >= 4) {
        selectedHouseId = 2
    } else if (newOb['hufflepuff'] >= 4) {
        selectedHouseId = 4
    } else if (newOb['ravenclaw'] >= 4) {
        selectedHouseId = 3
    } else {
        selectedHouseId = 1
    }
    console.log(selectedHouseId);

    fetch(`/api/quiz/${selectedHouseId}`, {
        method: 'put',
        body: JSON.stringify({
            house_id: selectedHouseId
        }),
        headers: { 'Content-Type': 'application/json' }
    }).then(function() {
        console.log('db updated');
    })

    fetch('/api/quiz', {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
    }).then(function() {
        document.location.replace('/api/playlist')
    })

}

document.querySelector('.quizQuestions').addEventListener('submit', resultsHandler);