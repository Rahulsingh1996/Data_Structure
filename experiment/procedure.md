<b>RED/BLACK TREE:</b>
<br><b>These are binary trees with the following properties.</b>
<br>1. Every node has a value.
<br>1. The value of any node is greater than the value of its left child and less than the value of its right child.
<br>2. Every node is colored either red or black.
<br>3. Every red node that is not a leaf has only black children.
<br>4. Every path from the root to a leaf contains the same number of black nodes.
<br>5. The root node is black.
<br>An n node red/black tree has the property that its height is O(lg(n)). Another important property is that a node can be added to a red/black tree and, in O(lg(n)) time, the tree can be readjusted to become a larger red/black tree. Similarly, a node can be deleted from a red/black tree and, in O(lg(n)) time, the tree can be readjusted to become smaller a red/black tree. Due to these properties, red/black trees are useful for data storage.
<br><b>Insertion Rules:</b>
<br>When a node is inserted in the tree it is given the color red. This does not affect the black node count on any path to a leaf. But it could lead to a single pair of consecutive red nodes in the tree. If the new node becomes a child of a black node there is no problem. But it may become a child of a red node. The double red violation will begin at a leaf. The rules below are designed to move the double violation up toward the root without affecting any path's black node count until it can be eliminated by bringing down a black from above or it reaches the root where it can be eliminated since the root can be colored black without consequence.
<br>Let current refer to the red node that has a red child thereby identifying the location of the violation. The parent of current will always be black. The list below shows all possible states for current. The insertion algorithm performs the action associated with the correct state and either terminates or repeats.

<br><b>Deletion Rules:</b>
<br>Let current refer to the node whose parent and siblings are queried in a deletion step. Initially current is the node selected for deletion. Suppose it has two children. Then another node is selected for deletion instead: namely, either a successor of current (a leaf or a node with only a right child of next greater value), or a predecessor of current (a leaf or node with only a left child of next smaller value). Either is easy to find and rules for doing so are in the next section. The deleted successor or predecessor is saved until the run terminates and then it replaces the node originally selected to be deleted. If a successor or predecessor is necessary, it becomes current when it is found. Due to the use of a successor, only nodes with at most one child need to be considered for deletion.<br>
<br><b>Successors and Predecessors:</b>
<br>The algorithm is made as simple as possible by reducing all non-trivial cases to either deleting a red leaf or black node that has at most one leaf child via the notions of successor and predecessor. The successor of a node of value X is the node of the tree whose value is the least that is greater than X. The predecessor of a node of value X is a node of the tree whose value is the greatest that is less than X. Each is easy to find: just do a depth first search on leftmost child, in the case of successor, and rightmost child, in the case of predecessor. The search ends when a leftmost or rightmost child does not exist. Therefore, the search ends at a node with at most one child. Moreover, if the node is red, it must be a leaf and if it is black its only possible child must be a red leaf. Thus, after rebalancing, the successor or predecessor can assume the position of the deleted node without violating the red/black property number 2. In the case of a red leaf below a black successor or predecessor, the red leaf can simply be moved up to be a child of the successor's or predecessor's former parent and its color changed to black. Actually, the only hard cases involve a black successor or predecessor with no children.

<br>This deletion algorithm may use either a successor or a predecessor. The decision is made as follows: the successor is used if it is red or it is not a black leaf (that is, it could be black with a red leaf); otherwise the predecessor is used. Whether a predecessor or successor is used, either is referred to as the successor in the above description.<br>

<br><b>As performed in the simulator:</b>
<br>1. First we Enter any number than it becomes root node.
<br>2. Again we enter any number if it is less than root node than it comes on left side of root node other wise if it is greater than root node than it comes to right side of root node and these values known as child node.
<br>3. All the values which we Enter except of root node are in red color
<br>4. Root node and Null node always Black.
<br>5. Every simple path from the root node to the (downward) leaf node contains the same number of black nodes.
<br>6. Find an any node in the red black tree by use find operation.
<br>7. And than print the Solverd array in this simulater.<br>
<br><b>Observation:</b>
<br>1. Most of the self-balancing BST library functions like map and set in C++ (OR TreeSet and TreeMap in Java) use Red Black Tree
<br>2. It is used to implement CPU Scheduling Linux. Completely Fair Scheduler uses it.
