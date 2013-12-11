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
      ofstream fout("aymara.vector");
      ifstream fin("aymara.words");
      string word;
      fout << "[";
      while(fin >> word){
	    fout << "\"" << word << "\",";
      }
      fout << "\"jallmuña\"]";
}

