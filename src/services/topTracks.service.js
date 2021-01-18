export const topTracksService = {
    get_topTracks
};

/**
 * Get top Tracks 
 * 
 * @returns {Object}
 */
async function get_topTracks() {
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };

    let res = await fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=012022d764767f3e140cb977b61c7fa4&format=json`, requestOptions)
    let topTracks =  await res.json()
    return topTracks.tracks.track;
}