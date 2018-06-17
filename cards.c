/*
* Program to evaluate face values.
* Released under the Vegas Public License.
* (c)2014 The College Blackjack Team.
0 is false and any other value is true.
*/
#include <stdio.h>
#include <stdlib.h>
int main() {
  char card_name[3];
  puts("Enter the card_name: ");
  scanf("%2s", card_name);
  int val = 0;
  if (card_name[0] == 'K') {val = 10;}
  else if (card_name[0] == 'Q') {val = 10;}
  else if (card_name[0] == 'J') {val = 10;}
  else if (card_name[0] == 'A') {val = 11;}
  else {val = atoi (card_name);}
  //check if value is 3 to 6
  if (val >=3 && val <= 6)
    puts ("Count has gone up");
  //check if card is 10 J Q K
  else if (val == 10) {
    puts ("Count has gone down");
  }

  printf("The card value is: %i\n", val);

  return 0;
}
