//#define NDEBUG
#define DEBUG_MODE true

#include<iostream>
#include<vector>
#include<algorithm>
#include<sstream>
#include<fstream>
#include<assert.h>
#include<set>

using namespace std;

typedef long long int ll;
typedef vector<int> vi;
typedef vector<ll> vll;
typedef vector<string> vs;

void dmes(string message){
      if(DEBUG_MODE)
	    cout << message;
}

int main(){
      ifstream fin("aymara.dic");
      ofstream fout("aymara.words");
      string line;
      while(fin>>line){
	    int x = line.find("=");
	    if(x != string::npos)
		  fout << line.substr(0, x) << endl;
      }
      cout << "done! :D" << endl;
}

