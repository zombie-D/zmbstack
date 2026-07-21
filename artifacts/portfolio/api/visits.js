/**
 * Proxy serverless - Compteur de visites
 * Appelle countapi.xyz côté serveur pour éviter les problèmes CORS.
 * Aucune base de données, aucune configuration requise.
 */
export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-store');

    try {
        // Appel server-to-server : aucun problème CORS
        const response = await fetch('https://api.countapi.xyz/hit/zmbstack-portfolio/visits', {
            headers: { 'User-Agent': 'zmbstack-portfolio/1.0' },
        });

        if (!response.ok) throw new Error(`countapi: ${response.status}`);

        const data = await response.json();
        return res.status(200).json({ count: data.value });
    } catch (err) {
        // Fallback silencieux : renvoie null (le badge disparaît proprement)
        return res.status(200).json({ count: null, error: String(err) });
    }
}
