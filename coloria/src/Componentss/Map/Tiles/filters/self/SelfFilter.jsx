export function SelfFilter ({showSelfFilter, x, y, tile, Yindex, Xindex, map}) {
    if (Yindex === map.cord[0] && Xindex === map.cord[1]) {
        return (
            <circle cx={x + 100 / (map.size * 2)} cy={y + 100 / (map.size * 2)} r={25/map.size}></circle>
        );
    }
    return null; 
}

export default SelfFilter;