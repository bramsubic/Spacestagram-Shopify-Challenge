import axios from 'axios'
const URL = 'https://api.nasa.gov/planetary/apod?api_key=57dQOEFpl20leOFXF3ksIqqclJt9ufWpF8OOqTvi'

const getImagesData = async () => {
    try {
        const response = await axios.get(URL);
    } catch (error) {
        
    }
}

