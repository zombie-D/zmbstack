/**
 * Vercel Serverless Function - Compteur de visites
 * Utilise Upstash Redis (gratuit) pour stocker le compteur global.
 * 
 * Variables d'environnement requises dans Vercel :
 *   - UPSTASH_REDIS_REST_URL
 *   - UPSTASH_REDIS_REST_TOKEN
 */
export default async function handler(req, res) {
    // CORS : autoriser le portfolio à appeler cette API
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Cache-Control', 'no-store');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } = process.env;

    if (!UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) {
        return res.status(500).json({ error: 'Upstash non configuré (variables d\'env manquantes)' });
    }

    try {
        // INCR : incrémente le compteur de 1 et retourne la nouvelle valeur
        const response = await fetch(`${UPSTASH_REDIS_REST_URL}/incr/portfolio_visits`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}`,
            },
        });

        const data = await response.json();

        return res.status(200).json({ count: data.result });
    } catch (err) {
        return res.status(500).json({ error: 'Erreur lors de la lecture du compteur', detail: String(err) });
    }
}
