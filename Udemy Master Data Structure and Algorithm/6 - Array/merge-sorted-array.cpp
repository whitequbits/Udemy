#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> mergeTwoArray(vector<int> arr1, vector<int> arr2)
{
  vector<int> mergeArray;
  // check if the input is 0 or not
  if (arr1.size() == 0)
  {
    return arr2;
  }

  if (arr2.size() == 0)
  {
    return arr1;
  }

  if (arr1.size() > arr2.size())
  {
    mergeArray = arr1;
    for (int i = 0; i < arr2.size(); i++)
    {
      mergeArray.push_back(arr2[i]);
    }
  }

  if (arr2.size() > arr1.size())
  {
    mergeArray = arr2;
    for (int i = 0; i < arr1.size(); i++)
    {
      mergeArray.push_back(arr1[i]);
    }
  }

  sort(mergeArray.begin(), mergeArray[i].end());

  return mergeArray;
}

int main()
{
  vector<int> array1 = {1, 2, 39, 239, 21, 3};
  vector<int> array2 = {78, 23, 45, 24, 58};

  vector<int> answerArray;

  answerArray = mergeTwoArray(array1, array2);

  for (int i = 0; i < answerArray.size(); i++)
  {
    cout << answerArray[i] << "," << endl;
  }
  return 0;
}
