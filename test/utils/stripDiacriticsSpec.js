import {expect} from 'chai';
import {range} from 'lodash';

import stripDiacritics from '../../src/utils/stripDiacritics';

describe('stripDiacritics', () => {

  it('removes accents and other diacritical marks from a string', () => {
    /* eslint-disable max-len */
    const string = 'ÆÐƎƐŒẞæǝɛœſßĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯƳąɓçđɗęħįƙłøơşșţțŧųưƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƐĠĜǦĞĢáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗéèėêëěĕēęẹġĝǧğģĤḤĦIÍÌİÎÏǏĬĪĨĮỊĴĶƘĹĻŁĽĿNŃŇÑŅÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĵķƙĸĺļłľŀŉńňñņóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧúùûüǔŭūũűůųụưẃẁŵẅýỳŷÿȳỹƴźżžẓ';
    const result = 'AEDEEOESaeeeoelsABCDDEHIKLOOSSTTTUUYabcddehikloosstttuuyAAAAAAAAAAAAEAEAEBCCCCCDDDDDEEEEEEEEEEEEGGGGGaaaaaaaaaaaaeaeaebcccccddddeeeeeeeeeegggggHHHIIIIIIIIIIIIJKKLLLLLNNNNNOOOOOOOOOOOOOOEhhhiiiiiiiiiiiijkkĸlllllnnnnnooooooooooooooeRRRSSSSSSSTTTTUUUUUUUUUUUUUWWWWYYYYYYYZZZZrrrlsssssssttttuuuuuuuuuuuuuwwwwyyyyyyyzzzz';
    /* eslint-enable max-len */

    expect(stripDiacritics(string)).to.equal(result);
  });

  it('removes combining diacritical marks from a string', () => {
    const alphaRange = ['a', 'b', 'c', 'd', 'e', 'f'];
    const numRange = range(30, 37);

    let arr = [];

    numRange.forEach((n) => {
      alphaRange.forEach((a) => {
        arr.push(n + a);
      });
    });

    // Build up a string of every unicode combining mark (\u0300-\u036F).
    const str = arr
      .concat(range(300, 370))
      .map((n) => String.fromCharCode('0x0' + n))
      .join('');

    expect(str.length).to.equal(112);
    expect(stripDiacritics(str)).to.equal('');
  });

});
