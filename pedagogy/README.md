## Pedagogy (Round 1)
<p align="center">
<br>
<br>
<b> Experiment: Red Black Tree   <a name="top"></a> <br>
</p>

<b>Discipline | <b>Engineering
:--|:--|
<b> Lab | <b> Engineering Mathematics
<b> Experiment|     <b> To perform the Red Black Tree


<h4> [1. Focus Area](#LO)
<h4> [2. Learning Objectives ](#LO)
<h4> [4. Task & Assessment Questions](#AQ)
<h4> [5. Simulator Interactions](#SI)
<hr>

<a name="LO"></a>
#### 1. Focus Area : Experimentation and Data Analysis
Basic contant
<p>A red–black tree is a kind of self-balancing binary search tree in computer science. Each node of the binary tree has an extra bit, and that bit is often interpreted as the color (red or black) of the node. These color bits are used to ensure the tree remains approximately balanced during insertions and deletions</p>
<p>A red-black tree is a binary search tree which has the following red-black properties:</br>
1.Every node is either red or black.</br>
2 Root of tree is always black.</br>
3.Every leaf (NULL) is black.</br>
4.If a node is red, then both its children are black.
5.Every simple path from a node to a descendant leaf contains the same number of black nodes.</br>
<p>	Basic red-black tree with the sentinel nodes added. Implementations of the red-black tree algorithms will usually include the sentinel nodes as a convenient means of flagging that you have reached a leaf node.</br>
They are the NULL black nodes of property2.
</p>
<br/>
<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>
<br/>
<hr>

<a name="LO"></a>
#### 2. Learning Objectives and Cognitive Level
The number of black nodes on any path from, but not including, a node x to a leaf is called the black-height of a node, denoted bh(x). We can prove the following lemma:<br>
<h4><b>Lemma:</b></h4>
A red-black tree with n internal nodes has height at most 2log(n+1).</br>
This demonstrates why the red-black tree is a good search tree: it can always be searched in O(log n) time.</br>
As with heaps, additions and deletions from red-black trees destroy the red-black property, so we need to restore it. To do this we need to look at some operations on red-black trees.
<h4><b>Rotations</b></h4>
A rotation is a local operation in a search tree that preserves in-order traversal key ordering.
Note that in both trees, an in-order traversal yields:

A x B y C
<h4><b>Algorithm</b></h4>
<h4><b>Left Rotation.

LEFT ROTATE (T, x)
 1. y ← right [x]
 1. y ← right [x]
 2. right [x] ← left [y]
 3. p [left[y]] ← x
 4. p[y] ← p[x]
 5. If p[x] = nil [T]
   then root [T] ← y
    else if x = left [p[x]] 									
      then left [p[x]] ← y
    else right [p[x]] ← y
 6. left [y] ← x.
 7. p [x] ← y.</br></br>
 <h4><b> RB-Insert </b></h4>
 RB-INSERT (T, z)
 1. y ← nil [T]
 2. x ← root [T]
 3. while x ≠ NIL [T]
 4. do y ← x
 5. if key [z] < key [x]
 6. then x  ← left [x]
 7. else x ←  right [x]
 8. p [z] ← y
 9. if y = nil [T]
 10. then root [T] ← z
 11. else if key [z] < key [y]
 12. then left [y] ← z
 13. else right [y] ← z
 14. left [z] ← nil [T]
 15. right [z] ← nil [T]
 16. color [z] ← RED
 17. RB-INSERT-FIXUP (T, z)</br></br>
  <h4><b> RB-INSERT-FIXUP (T, z) </b></h4>
  1. while color [p[z]] = RED
 2. do if p [z] = left [p[p[z]]]
 3. then y ← right [p[p[z]]]
 4. If color [y] = RED
 5. then color [p[z]] ← BLACK    //Case 1
 6. color [y] ← BLACK            //Case 1
 7. color [p[z]] ← RED           //Case 1
 8. z  ← p[p[z]]                 //Case 1
 9. else if z= right [p[z]]
 10. then z ← p [z]              //Case 2
 11. LEFT-ROTATE (T, z)          //Case 2
 12. color [p[z]] ← BLACK        //Case 3
 13. color [p [p[z]]] ← RED      //Case 3
 14. RIGHT-ROTATE  (T,p [p[z]])  //Case 3
 15. else (same as then clause)
      With "right" and "left" exchanged
 16. color [root[T]] ← BLACK</br></br>
 <h4><b>RB-DELETE (T, z) </b></h4>
 1. if left [z] = nil [T] or right [z] = nil [T]
 2. then y ← z
 3. else y ← TREE-SUCCESSOR (z)
 4. if left [y] ≠ nil [T]
 5. then x ← left [y]
 6. else x ← right [y]
 7. p [x] ←  p [y]
 8. if p[y] = nil [T]
 9. then root [T]  ← x
 10. else if y = left [p[y]]
 11. then left [p[y]] ← x
 12. else right [p[y]] ← x
 13. if y≠ z
 14. then key [z] ← key [y]
 15. copy y's satellite data into z
 16. if color [y] = BLACK
 17. then RB-delete-FIXUP (T, x)
 18. return y</br></br>
  <h4><b>RB-DELETE-FIXUP (T, x) </b></h4>
  1. while x ≠ root [T] and color [x] = BLACK
 2. do if x = left [p[x]]
 3. then w ← right [p[x]]
 4. if color [w] = RED
 5. then color [w] ← BLACK        //Case 1
 6. color [p[x]] ← RED            //Case 1
 7. LEFT-ROTATE (T, p [x])        //Case 1
 8. w ← right [p[x]]              //Case 1
 9. If color [left [w]] = BLACK and color [right[w]] = BLACK
 10. then color [w] ← RED         //Case 2
 11. x ← p[x]                     //Case 2
 12. else if color [right [w]] = BLACK
 13. then color [left[w]] ← BLACK //Case 3
 14. color [w] ← RED              //Case 3
 15. RIGHT-ROTATE (T, w)          //Case 3
 16. w ← right [p[x]]             //Case 3
 17. color [w] ← color [p[x]]     //Case 4
 18. color p[x] ← BLACK           //Case 4
 19. color [right [w]] ← BLACK    //Case 4
 20. LEFT-ROTATE (T, p [x])       //Case 4
 21. x ← root [T]                 //Case 4
 22. else (same as then clause with "right" and "left" exchanged)
 23. color [x] ← BLACK
</p>


<br/>
<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>
<br/>
<hr>

<a name="IS"></a>

#### 3. Task & Assessment Questions:

Read the theory and comprehend the concepts related to the experiment. 
<br>

Sr.No | Learning Objective to be met | Tasks to be performed by the students | Assessment questions aligned to the task
:--|:--|:--|:--:
1.| Calculate the sides | Take the individual value of <p>a²= c² - b²</p> b² = c² - a² <p>c² = a² + b²</p> | We should provide at least two value out of three sides of triangle and calculate value of remain one side.
2.| Analyze the importance of the Pythagoras theorem and understanding mathematical problems. | To find out the Height, Base and Hypotenuse. | Use the Simulation.

<br>

<br/>
<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>
<br/>
<hr>

<a name="SI"></a>

#### 4. Simulator Interactions:

<br>1. Find a right angled triangle by giving base and heights in the input box.
<br>2. Find the respective three sides of a triangle.
<br>3. Pythagoras theorem is used to check if a given triangle is a right-angled triangle or not.
<br>4. Use the Pythagorean theorem to derive the equation of a circle.
<br>5. Use the area of right triangles to deduce the areas of other shapes.
<br>6. Use the Pythagorean Theorem a<sup>2</sup>+b<sup>2</sup>=c<sup>2</sup> to write an equation to be solved.
<br>7. Rearrange the same four triangles such that they form two equal rectangles inside a larger square. 
<br>8. Recognize that the area not formed by the triangles is equal in both arrangements.
<br>9. In a right triangle, the square of the hypotenuse is equal to the sum of the square of the other two sides.
