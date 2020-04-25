import countGithubStreak from '../src/Components/welcomeMod/githubCount/githubCounter'

test("What is my github day streak", ()=>{
    expect(countGithubStreak()).toBe(0)
})