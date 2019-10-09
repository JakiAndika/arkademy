const hewan = ['singa', 'uler', 'harimau'], tambahan = ['buaya','belut', 'cacing', {obj :'rusa'}]
const arrayPushHewan = async () => {
    await tambahan.map(res => hewan.push(res))
    console.log(hewan);
}

arrayPushHewan();
/*NOTE :
Arrah map adalah fungsi perulangan array seperti for in dan 
foreach
*/  