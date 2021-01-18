export const infoArtistService = {
    get_infoArtist
};

/**
 * Get information about artist 
 * 
 * @returns {Object}
 */
async function get_infoArtist(name) {
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };
    
    let res = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=012022d764767f3e140cb977b61c7fa4&format=json`, requestOptions)
    let infoArtist =  await res.json()
    return infoArtist;
}