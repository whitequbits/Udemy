#include <iostream>
#include <string.h>
#include <vector>

using namespace std;

// In CPP we use the vector library for the array

int main()
{
  vector<string> arr = {
      "a",
      "b",
      "c",
      "d",
      "e"};

  // Lookup
  cout << "Look Up the third array" << endl;
  cout << arr[2] << endl;

  // push
  arr.push_back("f");

  cout << "After Push Back" << endl;

  for (int i = 0; i < arr.size(); i++)
  {
    cout << arr[i] << ",";
  }

  // pop
  cout << endl;
  cout << "Pop Back" << endl;
  arr.pop_back();

  for (int i = 0; i < arr.size(); i++)
  {
    cout << arr[i] << ",";
  }

  // insert / unshift
  cout << endl;
  cout << "Insert at the beginning of array / unshift" << endl;
  auto it = arr.begin();

  it = arr.insert(it, "hello");

  for (int i = 0; i < arr.size(); i++)
  {
    cout << arr[i] << ",";
  }

  // splice

  cout << endl;
  cout << "Insert at  array[2] / unshift" << endl;

  it = arr.insert(it + 2, "hello");

  for (int i = 0; i < arr.size(); i++)
  {
    cout << arr[i] << ",";
  }

  return 0;
}
