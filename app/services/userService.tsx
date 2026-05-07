let points = 0;

export const UserService = {
  getPoints: () => points,
  earnPoints: (amount: number) => {
    // Setiap kelipatan Rp 10.000 mendapatkan 1 poin
    points += Math.floor(amount / 10000);
  }
};