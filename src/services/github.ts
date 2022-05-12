import { Octokit } from 'octokit';
// import token from '../assets/json/token.json';

export interface Gist {
    filename: string,
    content: string
}

let octokit : Octokit;
const init = async () : Promise<Octokit> => {
    if (octokit) {
        return octokit;
    }
    console.log(Octokit);

    console.log('Hello Shivam');
    console.log('I said hello Shivam');

    octokit = new Octokit()//{ auth: token.github });

    // const {
    //     data: { login },
    //   } = await octokit.rest.users.getAuthenticated();
    //   console.log("Hello, %s", login);
    // return octokit;
}

export const getGists = async () => {
    await init();
    const gists = await octokit.rest.gists.listPublic();
    console.log('gists');

    console.log(gists);
    return gists;
}

export const getGist = async (gistId : string) : Promise<Gist> => {
    await init();
    const gistResponse = await octokit.rest.gists.get({ gist_id: gistId });

    const [ gist ] = Object.values(gistResponse.data.files).map((val) => ({ filename: val.filename, content: val.content }));
    return gist;
}