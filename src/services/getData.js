const getData = () => {
    const response = fetch("https://spreadsheets.google.com/feeds/list/11Y8l44wTwbmnPml0NA1cFHmzlnkjw2b4Tw73MWgBcLw/1/public/values?alt=json")
        .then(res => res.json())
        .then(json => {

            const data = [];
            const rows = json.feed.entry;

            for(let row of rows) {

                const formattedRow = {}

                for(let key in row) {
                    if(key.startsWith("gsx$")) {
                        formattedRow[key.replace("gsx$", "")] = row[key].$t
                    }
                }
                data.push(formattedRow);
            }
            return data;
        })

    return response;
}

export default getData;


