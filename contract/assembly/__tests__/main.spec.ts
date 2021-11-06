import { BuyMeNear } from '..'

describe('BuyMeNear', () => {

  it('should work correctly', () => {
    const buymenear = new BuyMeNear();
    expect(buymenear.getUserAccounts().length).toBe(0, "should be 0");
  });

  it('should total donations be zero when contract is created', () => {
    const buymenear = new BuyMeNear();
    expect(buymenear.getTotalDonations()).toBe(0, "should be 0");
  });

  it('should have an account when a profile is updated', () => {
    const buymenear = new BuyMeNear();
    expect(buymenear.getUserAccounts().length).toBe(0, "should be 0");

    const user = buymenear.updateUserProfile(
      'David',
      'Gonzalez',
      'Near Developer',
      `I'm a experienced Developer looking for job opportunities with Blockchain and Smart contracts`,
      'https://avatars.githubusercontent.com/u/1445496?v=4'
    );
    expect(buymenear.getUserAccounts().length).toBe(1, "should be 1");
    expect(buymenear.getAllUsers()[0].userId).toBe(user.userId, "should be the first user");
  });

  it('should have followers when a follower is added', () => {
    const buymenear = new BuyMeNear();
    const account = buymenear.updateUserProfile(
      'J.D',
      'Nicholls',
      'Full-Stack Developer | Open Source Contributor',
      `I am an Open Source Contributor, Full-Stack Developer with a background in web, mobile and game development, having 9+ years of practice and leadership building interactive experiences.`,
      'https://avatars.githubusercontent.com/u/2154886?v=4'
    );
    const follower = buymenear.updateUserProfile(
      'David',
      'Gonzalez',
      'Near Developer',
      `I'm a experienced Developer looking for job opportunities with Blockchain and Smart contracts`,
      'https://avatars.githubusercontent.com/u/1445496?v=4'
    );
    expect(buymenear.getFollowers(account.userId).length).toBe(0, "should have no followers");

    buymenear.addFollower(account.userId, follower.userId);

    expect(buymenear.getFollowers(account.userId).length).toBeGreaterThan(0, "should have a follower");
  });
});
