## Storyboard (Round 2)

Experiment 1: To  performing an activity Red Black Tree.

### 1. Story Outline:

A red–black tree is a special type of binary tree, used in computer science to organize pieces of comparable data, such as text fragments or numbers.

The leaf nodes of red–black trees do not contain data. These leaves need not be explicit in computer memory—a null child pointer can encode the fact that this child is a leaf—but it simplifies some algorithms for operating on red–black trees if the leaves really are explicit nodes. To save execution time, sometimes a pointer to a single sentinel node (instead of a null pointer) performs the role of all leaf nodes; all references from internal nodes to leaf nodes then point to the sentinel node.

Red–black trees, like all binary search trees, allow efficient in-order traversal (that is: in the order Left–Root–Right) of their elements. The search-time results from the traversal from root to leaf, and therefore a balanced tree of n nodes, having the least possible tree height, results in O(log n) search time.
### 2. Story:

Double sideband suppressed carrier modulation
At the beginning of the explanation of amplitude modulation, we explained the AM radio system, but the term for amplitude in the theoretical expression was complex. If the amplitude of the carrier wave is simply changed and mathematised, it is as follows. This modulation method is called DSB-SC (double sideband suppressed carrier modulation). As the name suggests, there’s no wave carrier in the modulated wave.
<img src="https://github.com/Rahulsingh1996/Data_Structure/blob/master/storyboard/storyboard/2.png" width="300" height="300">
<img src="https://github.com/Rahulsingh1996/Data_Structure/blob/master/storyboard/storyboard/3.png" width="300" height="300">
<img src="https://github.com/Rahulsingh1996/Data_Structure/blob/master/storyboard/storyboard/4.png" width="300" height="300">

<br>



### 3. Set the Visual Stage Description:
Red–black trees offer worst-case guarantees for insertion time, deletion time, and search time. Not only does this make them valuable in time-sensitive applications such as real-time applications, but it makes them valuable building blocks in other data structures which provide worst-case guarantees; for example, many data structures used in computational geometry can be based on red–black trees, and the Completely Fair Scheduler used in current Linux kernels and epoll system call implementation[19] uses red–black trees.

### 4. User objective goals
<p>Red-black trees are self-balancing so these operations are guaranteed to be O(log(n)); a simple binary search tree, on the other hand, could potentially become unbalanced, degrading to O(n) performance for Insert, Delete, and Get. Particularly useful when inserts and/or deletes are relatively frequent</p>
<li>Particularly useful when inserts and/or deletes are relatively frequent.</li>
<li>Relatively low constants in a wide variety of scenarios</li>
<li>Red-black trees are self-balancing so these operations are guaranteed to be O(logn</li></br>
<b> 5. <b>Challenges and Questions</b><br>
  <b>1..	What is the special property of red-black trees and what root should always be?</b>
<br> a)  a color which is either red or black and root should always be black color only
<br> b)height of the tree
<br> c) pointer to next node 
<br> d) a color which is either green or black
<br> ANS:-(a)

##### 2.. What are the operations that could be performed in O(logn) time complexity by red-black tree?
<br>  a)  insertion, deletion, finding predecessor, successor
<br>  b)  only insertion
<br>  c)  only finding predecessor, successor 
<br>  d)  for sorting
<br> ANS:- (a)

##### 3.Which of the following is an application of Red-black trees and why
<br> a)used to store strings efficiently
<br> b)used to store integers efficiently
<br> c)can be used in process schedulers, maps, sets
<br> d) for efficient sorting 
<br> ANS:-(c)

##### 4.  Why Red-black trees are preferred over hash tables though hash tables have constant time complexity?
<br> a)no they are not preferred
<br> b)because of resizing issues of hash table and better ordering in redblack trees 
<br> c)because they can be implemented using trees
<br> d)  because they are balanced
<br> ANS:-(b)

##### 5:- How can you save memory when storing color information in Red-Black tree?
<br> a)  using least significant bit of one of the pointers in the node for color information
<br> b)  using another array with colors of each node
<br> c)  storing color information in the node structure
<br> d)  using negative and positive numbering
<br> ANS:-(a)

##### 6:- What is the below pseudo code trying to do, where pt is a node pointer and root pointer
  redblack(Node root, Node pt) :
    if (root == NULL)
       return pt</br>
 
    if (pt.data < root.data)
    {    
        root.left  =   redblack(root.left, pt);
        root.left.parent = root
    }</br>
    else if (pt.data > root.data)
    { 
        root.right = redblackt(root.right, pt)
        root.right.parent = root
    }
   return root
<br> a) insert a new node
<br> b)delete a node
<br> c)search a node  
<br> d)count the number of nodes
<br> ANS:-(a)


### 6. Red-Black Tree ensure balance and facts :

Facts:<br> 
<br><b>For a general Binary Tree, let k be the minimum number of nodes on all root to NULL paths, then n >= 2k – 1 (Ex. If k is 3, then n is atleast 7). This expression can also be written as k <= Log2(n+1)</b> 
<br><b>From property 4 of Red-Black trees and above claim, we can say in a Red-Black Tree with n nodes, there is a root to leaf path with at-most Log2(n+1) black nodes.</b> 
<br><b> From property 3 of Red-Black trees, we can claim that the number black nodes in a Red-Black tree is at least ⌊ n/2 ⌋ where n is the total number of nodes.</b>
  <br><b>From above 2 points, we can conclude the fact that Red Black Tree with n nodes has height <= 2Log2(n+1)</b>

### 7.Conclusion:
####  In this post, we introduced Red-Black trees and discussed how balance is ensured. The hard part is to maintain balance when keys are added and removed. We will soon be discussing insertion and deletion operations in coming posts on the Red-Black tree.




