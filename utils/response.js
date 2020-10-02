export const response = (statusCode, message) => {
    return {
        statusCode,
        body: JSON.stringify(message, null, 2)
    }
}