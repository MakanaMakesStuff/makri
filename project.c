#include <stdlib.h>
#include <stdio.h>
#define PLAYERCOUNT 2
//Stores the name of user in our global scope
static char name[20];
//Represents state of our game: Started or Not Started(Includes Game Over)
static int started = 0;
static int choice = 0;

//Create Structs for person and cards
struct player{
    int count;
    struct card{
        int i, j, k;
    } cards[18];
};

//Create Array of player structs
struct player players[PLAYERCOUNT];

//Function Delcarations
void ReAssignPlayerCards(struct player* person, struct player* personb, int way);
void CheckPlayerCards();
void Start();
int OnWin();
void GetName();
void ResetCount(struct player* person, struct player* personb);
char* NextRound();
int Choice();
int main(){
    Start();
}
int Choice(){
    char choice[100];
    int c;
    printf("\nPlease select a card atttibute: Type '1' for i, '2' for j' and '3' for k\n");
    fflush(stdin);
    fgets(choice, sizeof choice, stdin);
    if(choice[0] == '1'){
        c = 1;
    }
    else if(choice[0] == '2'){
        c = 2;
    }
    else if(choice[0] == '3'){
        c = 3;
    }
    else{
        c = 1;
    }
    return c;
}
void Start(){
    choice = Choice();
    GetName();
    int playing = 0;
    for(int i = 0; i < PLAYERCOUNT; i++){
        players[i].count = 9;
    }
    while(playing == 0){
        for(int i = 0; i < PLAYERCOUNT; i++){
            for(int b = 0; b < 9; b++){
                for(int c = 0; c < 9; c++){
                    players[i].cards[b].i = rand() % 10;
                    players[i].cards[b].j = rand() % 10;
                    players[i].cards[b].k = rand() % 10;
                }
            }
        }
        CheckPlayerCards();
        playing = OnWin();
        if(started <= 0){
            getchar();
        }
        
    }
    char *answer = NextRound();
    if(answer[0] == 'y' || answer[0] == 'Y'){
        playing = 0; started = 0;
        Start();
    }
    else if(answer[0] == 'n' || answer[0] == 'N'){
        playing = 1;
    }
    else{
        playing = 0; started = 0;
        Start();
    }
}

void CheckPlayerCards(){
    if(choice == 1){
         if(players[0].cards[0].i > players[1].cards[0].i){
            ReAssignPlayerCards(&players[0], &players[1], 1);
        }
        else{
            ReAssignPlayerCards(&players[1], &players[0], 0);
        }       
    }
    else if(choice == 2){
         if(players[0].cards[0].j > players[1].cards[0].j){
            ReAssignPlayerCards(&players[0], &players[1], 1);
        }
        else{
            ReAssignPlayerCards(&players[1], &players[0], 0);
        }       
    }
    else if(choice == 3){
         if(players[0].cards[0].k > players[1].cards[0].k){
            ReAssignPlayerCards(&players[0], &players[1], 1);
        }
        else{
            ReAssignPlayerCards(&players[1], &players[0], 0);
        }       
    }    

}

void ReAssignPlayerCards(struct player* person, struct player* personb, int way){
    if(way == 0){
        int pos = person -> count + 1;
        person -> cards[pos] = personb -> cards[0];
        if(choice == 1){
            printf("\nrobot card | %d\n", personb -> cards[0].i);
            printf("your card | %d\n", person -> cards[0].i);
        }
        else if(choice == 2){
            printf("\nrobot card | %d\n", personb -> cards[0].j);
            printf("your card | %d\n", person -> cards[0].j);            
        }
        else if(choice == 3){
            printf("\nrobot card | %d\n", personb -> cards[0].k);
            printf("your card | %d\n", person -> cards[0].k);            
        }
        for(int i = 0; i < personb -> count; i++){
            personb -> cards[i] = personb -> cards[i+1];
        }
        person -> count+=1;
        personb -> count-=1;
        printf("robot count | %d\n", personb -> count);
        printf("player count | %d\n", person -> count);
    }
    else if(way == 1){
        int pos = person -> count + 1;
        person -> cards[pos] = personb -> cards[0];
        if(choice == 1){
            printf("\nrobot card | %d\n", person -> cards[0].i);
            printf("your card | %d\n", personb -> cards[0].i);
        }
        if(choice == 2){
            printf("\nrobot card | %d\n", person -> cards[0].j);
            printf("your card | %d\n", personb -> cards[0].j);
        }
        if(choice == 3){
            printf("\nrobot card | %d\n", person -> cards[0].k);
            printf("your card | %d\n", personb -> cards[0].k);
        }
        for(int i = 0; i < personb -> count; i++){
            personb -> cards[i] = personb -> cards[i+1];
        }
        person -> count+=1;
        personb -> count-=1;
        printf("robot count | %d\n", person -> count);
        printf("player count | %d\n", personb -> count);        
    }
}

int OnWin(){
    if(players[1].count >= 18 || players[0].count <= 0){
        printf("You Win %s\n", name);
        ResetCount(&players[0], &players[1]);
        started++;
        return 1;
    }
    else if(players[0].count >= 18 || players[1].count <= 0){
        printf("Game Over %s\n", name);
        ResetCount(&players[0], &players[1]);
        started++;
        return 1;
    }
    return 0;
}

void ResetCount(struct player* person, struct player* personb){
    person -> count = 9;
    personb -> count = 9;
}

void GetName(){
    printf("Please Type your name: ");
    fgets(name,20,stdin);
}

char* NextRound(){
    char answer[10];
    char * ans = answer;
    printf("Would you like to continue playing? Type 'y' for YES or just press enter | Type 'n' for NO: ");
    fgets(answer, 10, stdin);
    return ans;
}