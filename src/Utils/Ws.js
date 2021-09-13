export default async function Ws(path, method) {
    try {
        const res = await fetch(path, { method: method, headers: { 'Content-Type': 'application/json' } })
        return await res.json()
    } catch (error) {
        return error
    }
}
