const user = {
    text: 'John'
};
 
const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json'
    }
}
 
fetch('https://moderation.logora.fr/predict', options)
    .then(res => res.json())
 