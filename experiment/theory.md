<b>RED BLACK TREE</b><br>
A Red Black Tree is a type of self-balancing binary search tree, in which every node is colored with a red or black. The red black tree satisfies all the properties of the binary search tree but there are some additional properties which were added in a Red Black Tree. The height of a Red-Black tree is O(Log n) where (n is the number of nodes in the tree).
<br><br>
<b>Properties of Red Black Tree</b><br>
1. The root node should always be black in color.
<br>2. Every null child of a node is black in red black tree.
<br>3. The children of a red node are black. It can be possible that parent of red node is black node.
<br>4. All the leaves have the same black depth.
<br>5. Every simple path from the root node to the (downward) leaf node contains the same number of black nodes..

<img src="https://github.com/Rahulsingh1996/Data_Structure/blob/master/experiment/images/1.jpg">

<br>While representing the red black tree color of each node should be shown. In this tree leaf nodes are simply termed as null nodes which means they are not physical nodes. It can be checked easily in the above-given tree there are two types of node in which one of them is red and another one is black in color. The above-given tree follows all the properties of a red black tree that are.
<br>1. It is a binary search tree.
<br>2. The root node is black.
<br>3. The children’s of red node are black.
<br>4. All the root to external node paths contain same number of black nodes.
<br>Example: Consider path 75-90-80-88-null and 75-40-30-null in both these paths 3 black nodes are there.
<br>
<br><b>Advantages of Red Black Tree</b>
<br>1. Red black tree are useful when we need insertion and deletion relatively frequent.
<br>2. Red-black trees are self-balancing so these operations are guaranteed to be O(log <i>n</i>).
<br>3. They have relatively low constants in a wide variety of scenarios.
<br>
<br><b>Algorithm</b>
<br><b>Left Rotation.</b>
<br> LEFT ROTATE (T, x) 1. y ← right [x]
<br>2. y ← right [x]
<br>3. right [x] ← left [y]
<br>4. p [left[y]] ← x
<br>5. p[y] ← p[x]
<br>6. If p[x] = nil [T]
<br>7. then root [T] ← y else if x = left [p[x]]
<br>8. then left [p[x]] ← y
<br>9. else right [p[x]] ← y
<br>10. left [y] ← x.
<br>11. p [x] ← y.
<br>
<br><b>RB-Insert</b>
<br>RB-INSERT (T, z)
<br>1. y ← nil [T]
<br>2. x ← root [T]
<br>3. while x ≠ NIL [T]
<br>4. do y ← x
<br>5. if key [z] < key [x]
<br>6. then x ← left [x]
<br>7. else x ← right [x]
<br>8. p [z] ← y
<br>9. if y = nil [T]
<br>10. then root [T] ← z
<br>11. else if key [z] < key [y]
<br>12. then left [y] ← z
<br>13. else right [y] ← z
<br>14. left [z] ← nil [T]
<br>15. right [z] ← nil [T]
<br>16. color [z] ← RED
<br>17. RB-INSERT-FIXUP (T, z)
<br>
<br><b>RB-INSERT-FIXUP (T, z)</b>
<br>1. while color [p[z]] = RED
<br>2. do if p [z] = left [p[p[z]]]
<br>3. then y ← right [p[p[z]]]
<br>4. If color [y] = RED
<br>5. then color [p[z]] ← BLACK //Case 1
<br>6. color [y] ← BLACK //Case 1
<br>7. color [p[z]] ← RED //Case 1
<br>8. z ← p[p[z]] //Case 1
<br>9. else if z= right [p[z]]
<br>10. then z ← p [z] //Case 2
<br>11. LEFT-ROTATE (T, z) //Case 2
<br>12. color [p[z]] ← BLACK //Case 3
<br>13. color [p [p[z]]] ← RED //Case 3 14. RIGHT-ROTATE (T,p [p[z]]) //Case 3
<br>15. else (same as then clause)
<br>With "right" and "left" exchanged
<br>16. color [root[T]] ← BLACK
<br><br>
<b>RB-DELETE (T, z)</b>
<br>1. if left [z] = nil [T] or right [z] = nil [T]
<br>2. then y ← z
<br>3. else y ← TREE-SUCCESSOR (z)
<br>4. if left [y] ≠ nil [T]
<br>5. then x ← left [y]
<br>6. else x ← right [y]
<br>7. p [x] ← p [y]
<br>8. if p[y] = nil [T]
<br>9. then root [T] ← x
<br>10. else if y = left [p[y]]
<br>11. then left [p[y]] ← x
<br>12. else right [p[y]] ← x
<br>13. if y≠ z
<br>14. then key [z] ← key [y]
<br>15. copy y's satellite data into z
<br>16. if color [y] = BLACK
<br>17. then RB-delete-FIXUP (T, x)
<br>18. return y<br>

<br><b>RB-DELETE-FIXUP (T, x)</b>
<br>1. while x ≠ root [T] and color [x] = BLACK
<br>2. do if x = left [p[x]]
<br>3. then w ← right [p[x]]
<br>4. if color [w] = RED
<br>5. then color [w] ← BLACK //Case 1
<br>6. color [p[x]] ← RED //Case 1
<br>7. LEFT-ROTATE (T, p [x]) //Case 1
<br>8. w ← right [p[x]] //Case 1
<br>9. If color [left [w]] = BLACK and color [right[w]] = BLACK
<br>10. then color [w] ← RED
<br>//Case 2
<br>11. x ← p[x] //Case 2
<br>12. else if color [right [w]] = BLACK
<br>13. then color [left[w]] ← BLACK //Case 3
<br>14. color [w] ← RED //Case 3
<br>15. RIGHT-ROTATE (T, w) //Case 3
<br>16. w ← right [p[x]] //Case 3
<br>17. color [w] ← color [p[x]] //Case 4
<br>18. color p[x] ← BLACK //Case 4
<br>19. color [right [w]] ← BLACK //Case 4
<br>20. LEFT-ROTATE (T, p [x]) //Case 4
<br>21. x ← root [T] //Case 4
<br>22. else (same as then clause with "right" and "left" exchanged)
<br>23. color [x] ← BLACK
