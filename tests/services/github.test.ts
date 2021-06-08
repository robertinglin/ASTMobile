import { getGists, getGist, Gist } from "../../src/services/github";
import * as octo from 'octokit';

console.log(octo);
describe('github service', () => {
    xit ('getGists', async () => {

        let gists = await getGists();
        expect(gists).not.toBeUndefined();
    })

    it('gets a gist', async () => {
        const gistId = '24753b4fce0c340531ea64fd4e9c8ef5';
        const gist : Gist = await getGist(gistId);
        console.log(gist);
        expect(gist.content).toBeTruthy();
    })
});