export default class Words {
  private words = [];

  async fetchWords(wordCount: number, wordLength: number, firstLetter: string, alphabetize: boolean) {
    const url = `https://random-word-api.vercel.app/api?words=${wordCount}&length=${wordLength}&letter=${firstLetter}&alphabetizer=${alphabetize}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  public async setRandomWords(wordCount: number, wordLength: number, firstLetter: string, alphabetize: boolean) {
    this.words = await this.fetchWords(wordCount, wordLength, firstLetter, alphabetize);
  }

  public getRandomWords(): string[] {
    return this.words;
  }
}