---
layout: post
title: "Vapnik-Chervonenkis Classes"
date: 2026-06-16
tags: [math, statistics]
excerpt: >-
  Earlier, we have results of the kind ... Note that this is much, much better than results of the kind given by direct applications of concentration inequalities, e.g. Azuma-Hoeffding inequality.
---
{% raw %}
<span id="sec:vc"></span>

<p>Earlier, we have results of the kind <span
class="math display">\[\begin{aligned}
    \mathbb E \lVert \mathbb G_n \rVert_{\mathcal F} \lesssim
J_{[\:]}(\lVert F \rVert_{\mathbf P\,\,\!\!, 2}, \mathcal F, \lVert
\cdot \rVert_{\mathbf P\,\,\!\!, 2}) ~.
\end{aligned}\]</span> Note that this is much, much better than results
of the kind given by direct applications of concentration inequalities,
e.g. Azuma-Hoeffding inequality. There, the covering number is replaced
by <span class="math inline">\(N(\varepsilon, \mathcal F, \lVert \cdot
\rVert_\infty)\)</span>, which is much larger. The trade-off from using
the maximal inequalities like above, though, is that we need to control
the random covering numbers. This is <em>a priori</em> difficult to do
so, especially if we do not know more about the underlying structure of
<span class="math inline">\(\mathcal F\)</span>. So, we deal with a
natural but seemingly difficult task: we bound the random entropy number
<em>uniformly</em>, i.e. <span class="math display">\[\begin{aligned}
    N(\varepsilon, \mathcal F, \lVert \cdot \rVert_{\widehat P_n, 2})
\leq \lVert N(\varepsilon, \mathcal F, \lVert \cdot \rVert_{\widehat
P_n, 2}) \rVert_\infty ~.
\end{aligned}\]</span> A deep observation is the following: while we may
expect the right-hand side of the above to <em>essentially</em> reduce
to bounding the covering number in the sup-norm (because we know nothing
of the distribution of the data <span class="math inline">\(\mathbf
P\,\,\!\!\)</span>), this is incorrect. An example of this is, again,
embodied in the Glivenko-Cantelli theorem: to understand the rate of
convergence at which the phenomenon occurs (for distribution functions),
we must understand the supremum of the following empirical process <span
class="math display">\[\begin{aligned}
    \sup_{f \in \mathcal F_1} | \widehat P_n f - \mathbf P\,\,\!\!f | =
\frac{1}{\sqrt{n}} \sup_{f \in \mathcal F} |\mathbb G_n (f)| ~,
\end{aligned}\]</span> where <span class="math inline">\(\mathcal
F_1\)</span> is the class of indicator functions as defined before.
However, for any <span class="math inline">\(x&#39; \neq x\)</span>, we
have <span class="math inline">\(\lVert \mathbb 1_{(-\infty, x&#39;]} -
\mathbb 1_{(-\infty, x]} \rVert_\infty = 1\)</span>. Therefore, the
covering number under the sup-norm is <span
class="math inline">\(\infty\)</span> for any <span
class="math inline">\(\varepsilon &lt; 1\)</span>, and no chaining
argument with respect to the sup-norm can ever capture the uniform
convergence of the empirical process over the class <span
class="math inline">\(\mathcal F_1\)</span>.</p>
<h2 id="vc-dimension">VC Dimension</h2>
<p>Let’s look at this example more closely to see “what goes wrong” with
the indicator functions. Abstractly, let us consider a <em>Boolean
class</em> of functions, denoted <span class="math inline">\(\mathcal
F\)</span>. Consider a collection of subsets of <span
class="math inline">\(\mathcal X\)</span>, denoted <span
class="math inline">\(\mathscr C\)</span>, and we define <span
class="math display">\[\begin{aligned}
    \mathcal F = \{ \mathbb 1_C : C \in \mathscr C \} ~.
\end{aligned}\]</span> Again, by the discussion above, we would want to
study the collection of subsets <span class="math inline">\(\mathscr
C\)</span>. An inspection shows that we have that <span
class="math inline">\(N(\varepsilon, \mathscr C, \lVert \cdot
\rVert_\infty) = |\mathscr C|\)</span>. So, instead of looking at the
sup-norm, let us leverage symmetrization in some way; we want to do so
for at least two reasons: one, we would work with covering numbers in
the <span class="math inline">\(L^2\)</span> norm, and not the <span
class="math inline">\(L^\infty\)</span> norm; two, with symmetrization,
we would work with norms supported on the finite set <span
class="math inline">\(\{X_1, \dots, X_n\}\)</span>. The reduction in the
complexity of the problem (of bounding random covering numbers
uniformly) is immediate: we always have the naïve bound <span
class="math display">\[\begin{aligned}
    N(\varepsilon, \mathcal F, \lVert \cdot \rVert_{\widehat P_n, 2})
\leq N(\varepsilon, \mathcal F, \lVert \cdot \rVert_{\widehat P_n,
\infty}) = | \mathscr C \cap \{X_1, \dots, X_n\} | \leq 2^n ~,
\end{aligned}\]</span> where <span class="math inline">\(\lVert \cdot
\rVert_{\widehat P_n, \infty}\)</span> is understood as the sup-norm
over <span class="math inline">\(\mathcal F\)</span> under the empirical
measure. The <span class="math inline">\(2^n\)</span> upper bound is
crude, but follows directly from the fact that <span
class="math inline">\(\mathscr C \cap \{X_1, \dots, X_n\}\)</span>
contains subsets of at most <span class="math inline">\(n\)</span>
points. At this level of generality, we cannot do better than the bound
<span class="math inline">\(2^n\)</span>, and this seems laughably crude
in scenarios of interest. However, consider <span
class="math inline">\(\mathscr X = \mathbb R\)</span> and <span
class="math inline">\(\mathscr C = \{ (-\infty, x] : x \in \mathbb R
\}\)</span>. It clearly follows that <span
class="math display">\[\begin{aligned}
    \mathscr C \cap \{X_1, \dots, X_n\} = \{ \{X_{(n)}, \dots, X_{(j)}\}
: 1 \leq j \leq n \} \cup \{ \emptyset \} ~,
\end{aligned}\]</span> where <span class="math inline">\(\{X_{(1)},
\dots, X_{(n)}\}\)</span> denotes the decreasing arrangement of <span
class="math inline">\(X_1, \dots, X_n\)</span>. Therefore, we have that
<span class="math inline">\(|\mathscr C \cap \{X_1, \dots, X_n\}| \leq
n+1\)</span>, so we have the nontrivial bound on the empirical process
<span class="math display">\[\begin{aligned}
    \mathbb E \lVert \widehat P_n - \mathbf P\,\,\!\!\rVert_{\mathcal F}
= \frac{1}{\sqrt{n}} \mathbb E \sup_{C \in \mathscr C} |\mathbb G_n (C)|
\lesssim \sqrt{\frac{\log n}{n}} ~.
\end{aligned}\]</span> With this, as before, we can deduce the
Glivenko-Cantelli theorem by using McDiarmid’s inequality and the
Borel-Cantelli lemma. This bound is not sharp; in praticular, we have an
additional <span class="math inline">\(\sqrt{\log n}\)</span> factor
that enters once we approximate <span class="math inline">\(L^2(\widehat
P_n)\)</span> using <span class="math inline">\(L^\infty(\widehat
P_n)\)</span> covering numbers, but this is at least controllable. And
it appears that the quantity <span class="math inline">\(|\mathscr C
\cap \{X_1, \dots, X_n\}|\)</span> somehow captures the number of
degrees of freedom of the class <span class="math inline">\(\mathscr
C\)</span>. To understand this phenomenon for general classes of sets,
we must understand how to define an intrinsic notion of “dimension” that
does not depend on a parametrization. To this end, we introduce a
<em>combinatorial</em> notion of dimension.</p>
<p>Let <span class="math inline">\(I \subset \mathscr X\)</span> and
<span class="math inline">\(\mathscr C\)</span> be a collection of
subsets of <span class="math inline">\(\mathscr X\)</span>. We say <span
class="math inline">\(I\)</span> is <em>shattered by <span
class="math inline">\(\mathscr C\)</span></em> if <span
class="math inline">\(\mathscr C \cap I = 2^I\)</span>, i.e. for every
<span class="math inline">\(J \subset I\)</span>, there exists some
<span class="math inline">\(C \in \mathscr C\)</span> such that <span
class="math inline">\(C \cap I = J\)</span>. Correspondingly, the
<em>Vapnik-Chervonenkis dimension of <span
class="math inline">\(\mathscr C\)</span></em>, or the <em>VC-dimension
of <span class="math inline">\(\mathscr C\)</span></em>, is the maximal
size of <span class="math inline">\(I\)</span> that can be shattered by
<span class="math inline">\(\mathscr C\)</span>, i.e. <span
class="math display">\[\begin{aligned}
    \operatorname{VC}(\mathscr C) \triangleq \sup \{ |I| : I \text{ is
shattered by } \mathscr C \} ~.
\end{aligned}\]</span> So, the VC dimension is the cardinality of the
largest set of points such that we can recover <em>all possible subsets
of these points</em> by intersecting with elements of <span
class="math inline">\(\mathscr C\)</span>. An equivalent way of stating
the VC dimension is that it is the smallest <span
class="math inline">\(n\)</span> for which no set of size <span
class="math inline">\(n\)</span> is shattered by <span
class="math inline">\(\mathscr C\)</span>. Right now, it is not clear
what the consequence of VC dimension being infinity is; it is quite
possible that this means <span class="math inline">\(|\mathscr C \cap
\{X_1, \dots, X_n\}| \sim 2^n\)</span> for all <span
class="math inline">\(n\)</span>, in which case there is nothing
nontrivial to be obtained from pursuing this definition. And indeed it
is not useful to go down that route. It is, however, extremely
informative if we know that <span
class="math inline">\(\operatorname{VC}(\mathscr C) &lt;
\infty\)</span>. There is a remarkable combinatorial fact that allows us
to conclude that <span class="math inline">\(\operatorname{VC}(\mathscr
C) &lt; \infty\)</span> always gives us nontrivial, and informative,
bound on <span class="math inline">\(|\mathscr C \cap \{X_1, \dots,
X_n\}|\)</span>. This is embodied in the Sauer-Shelah lemma, as
follows.</p>
<div id="lem:sauer-shelah" class="lemma">
<p><strong>Lemma 1</strong> (Sauer-Shelah). For all <span
class="math inline">\(n \in \mathbb N\)</span> and <span
class="math inline">\(x_1, \dots, x_n \in \mathscr X\)</span>, <span
class="math display">\[\begin{aligned}
        |\mathscr C \cap \{X_1, \dots, X_n\}| \leq \sum_{0 \leq k \leq
\operatorname{VC}(\mathscr C)} \binom{n}{k} \leq \left(
\frac{ne}{\operatorname{VC}(\mathscr C)}
\right)^{\operatorname{VC}(\mathscr C)} ~.
    
\end{aligned}\]</span></p>
</div>
<p>The proof of the Sauer-Shelah lemma involves one major combinatorial
argument, but the underlying logic is straightforward. By the definition
of the VC dimension, a shattered set <span
class="math inline">\(I\)</span> must satisfy the inequality <span
class="math inline">\(|I| \leq |\operatorname{VC}(\mathscr C)|\)</span>.
So, <span class="math display">\begin{equation}\label{eq:s-s-step1}\begin{aligned}
     |\mathscr C \cap \{x_1, \dots, x_n\}| &amp;\leq
|\{I \subset \{x_1, \dots, x_n\} : I \text{ is shattered by } \mathscr
C\}| ~,
    \end{aligned}\end{equation}</span>

<p>and if we can show the above is true, it then follows
from applying the property $|I| \leq |\operatorname{VC}(\mathscr C)|$
that</p>

<span class="math display">\begin{equation}\label{eq:s-s-step2}\begin{aligned}
     &amp;\leq |\{I \subset \{x_1, \dots, x_n\} :
|I| \leq \operatorname{VC}(\mathscr C)\}| \leq \sum_{0 \leq k \leq
\operatorname{VC}(\mathscr C)} \binom{n}{k}
\end{aligned}\end{equation}</span> holds. The second inequality in the Sauer-Shelah
lemma follows from the binomial theorem.</p>
<p>Therefore, the hard part in the proof of the Sauer-Shelah lemma lies
in showing the inequality in \eqref{eq:s-s-step1}. This is known as
<em>Pajor’s rearrangement theorem</em>.</p>
<div id="thm:pajor" class="theorem">
<p><strong>Theorem 2</strong> (Pajor). For every class of subsets <span
class="math inline">\(\mathscr C\)</span> of <span
class="math inline">\(\mathscr X\)</span>, we have <span
class="math inline">\(|\mathscr C| \leq |\{ I \subset \mathscr X : I
\text{ is shattered by } \mathscr C\}|\)</span>.</p>
</div>
<div class="proof">
<p><em>Proof.</em> The simplest proof that I can find for this result is
due to Alon, and this proceeds by induction. First, note that every
family of only one set shatters the empty set. So, we now suppose the
result holds for <span class="math inline">\(|\mathscr X| = m\)</span>.
For the inductive step, <span class="math inline">\(|\mathscr X| =
m+1\)</span>. Pick any <span class="math inline">\(x \in \mathscr
X\)</span>, and construct <span class="math inline">\(\mathscr C_+ = \{C
\in \mathscr C : x \in C\}\)</span> and <span
class="math inline">\(\mathscr C_- = \{C \in \mathscr C : x \notin
C\}\)</span>.</p>
<p>By the induction hypothesis, <span class="math inline">\(\mathscr
C_+\)</span> and <span class="math inline">\(\mathscr C_-\)</span>
shatter two collections of sets whose sizes add to at least <span
class="math inline">\(|\mathscr C|\)</span>. This is because if a set
<span class="math inline">\(I\)</span> is shatted by a subfamily of
<span class="math inline">\(\mathscr C\)</span>, then, by definition,
<span class="math inline">\(I\)</span> is shattered by <span
class="math inline">\(\mathscr C\)</span> as well. Furthermore, none of
these shattered sets contain <span class="math inline">\(x\)</span>,
since a set that contains <span class="math inline">\(x\)</span> cannot
be shattered by a family in which all sets contain <span
class="math inline">\(x\)</span>, or all sets do not contain <span
class="math inline">\(x\)</span>. The only case we need to take care of
is that some of the shattered sets may be shattered by both subfamilies
<span class="math inline">\(\mathscr C_+\)</span> and <span
class="math inline">\(\mathscr C_-\)</span>. So we need to argue that
there is “double-counting” going on in this case.</p>
<p>To see the “double counting”, recall, from above, that when a set is
shattered by only one of the two subfamilies, say <span
class="math inline">\(\mathscr C_+\)</span>, it contributes <em>one</em>
to the cardinality of the shattered sets of <span
class="math inline">\(\mathscr C_+\)</span> <em>and</em> to the
cardinality of the shattered sets of <span
class="math inline">\(\mathscr C\)</span>. If a set is shattered by both
<span class="math inline">\(\mathscr C_+\)</span> and <span
class="math inline">\(\mathscr C_-\)</span>, then the set (call it <span
class="math inline">\(I\)</span>) and <span class="math inline">\(I \cup
\{x\}\)</span> must be shattered by <span class="math inline">\(\mathscr
C\)</span>. In particular, <span class="math inline">\(I \cup
\{x\}\)</span> is shattered by any subset of <span
class="math inline">\(\mathscr C\)</span> containing <span
class="math inline">\(x\)</span>. Therefore, in this case, the set <span
class="math inline">\(I\)</span> contributes <em>two</em> to the
cardinality of the shattered sets of <span
class="math inline">\(\mathscr C_+\)</span> <em>and</em> to the
cardinality of the shattered sets of <span
class="math inline">\(\mathscr C\)</span>.</p>
<p>Combining all the arguments above, we then have <span
class="math display">\[\begin{aligned}
        &amp; |\{I \subset \mathscr X : I \text{ is shattered by }
\mathscr C\}| \\
        &amp;\geq |\{I \subset \mathscr X : I \text{ is shattered by }
\mathscr C_+\}| + |\{I \subset \mathscr X : I \text{ is shattered by }
\mathscr C_-\}| \geq |\mathscr C| ~,
    
\end{aligned}\]</span> which completes the inductive step. ◻</p>
</div>
<div class="proof">
<p><em>Proof of Lemma <a href="#lem:sauer-shelah"
data-reference-type="ref" data-reference="lem:sauer-shelah">1</a>.</em>
Note that \eqref{eq:s-s-step1} is justified by Pajor’s
rearrangement theorem (Theorem <a href="#thm:pajor"
data-reference-type="ref" data-reference="thm:pajor">2</a>), and \eqref{eq:s-s-step2} follows by inspection.
Therefore, it remains to show the second inequality; but this is a
direct consequence of the binomial theorem: for any <span
class="math inline">\(a &lt; \operatorname{VC}(\mathscr C)\)</span>, we
can always estimate <span class="math display">\[\begin{aligned}
        \sum_{0 \leq k \leq a} \binom{n}{k} \left( \frac{a}{n} \right)^a
\leq \sum_{0 \leq k \leq a} \binom{n}{k} \left( \frac{a}{n} \right)^k =
\left( 1 + \frac{a}{n} \right)^n \leq e^a ~,
    
\end{aligned}\]</span> from which we obtain <span
class="math display">\[\begin{aligned}
        \left( \frac{\operatorname{VC}(\mathscr C)}{n}
\right)^{\operatorname{VC}(\mathscr C)} \sum_{0 \leq k \leq
\operatorname{VC}(\mathscr C)} \binom{n}{k} &amp;\leq
e^{\operatorname{VC}(\mathscr C)} \\
        \end{aligned}\]</span>

<p>or equivalently,</p>

<span class="math display">\[\begin{aligned}
        \sum_{0 \leq k \leq \operatorname{VC}(\mathscr C)} \binom{n}{k}
&amp;\leq e^{\operatorname{VC}(\mathscr C)} \left(
\frac{n}{\operatorname{VC}(\mathscr C)}
\right)^{\operatorname{VC}(\mathscr C)} ~,
    
\end{aligned}\]</span> as desired. ◻</p>
</div>
<p>Note that if we apply the Sauer-Shelah lemma to study the symmetrized
empirical process, we immediately obtain the bound <span
class="math display">\[\begin{aligned}
    \sup_{P \in \mathcal{P}(\mathscr X)} \mathbb E \sup_{C \in \mathscr
C} \widehat P_n (C) - \mathbf P\,\,\!\!(C) \lesssim
\sqrt{\operatorname{VC}(\mathscr C)} \sqrt{\frac{\log n}{n}} ~.
\end{aligned}\]</span> Here, <span
class="math inline">\(\mathcal{P}(\mathscr X)\)</span> denotes the set
of all probability measures defined on <span
class="math inline">\(\mathscr X\)</span>. This application of the
Sauer-Shelah lemma shows that the law of large numbers holds uniformly
over classes of sets <span class="math inline">\(\mathscr C\)</span>
with <em>finite VC dimension</em>. Furthermore, we obtain a bound on the
rate of convergence that is completely independent of the distribution
of the underlying independent variables. Classes <span
class="math inline">\(\mathscr C\)</span> that satisfy this property are
called <em>uniform Glivenko-Cantelli classes</em>.</p>
<p>But, note that in the bound above, we picked up an extra <span
class="math inline">\(\sqrt{\log n}\)</span> again. This is due to the
fact that we are bounding <span class="math inline">\(L^2\)</span>
covering numbers by <span class="math inline">\(L^\infty\)</span>
covering numbers—which is bad, in the sense that the latter grows like
<span class="math inline">\(n\)</span> does, but the former does not.
The following result formalizes the statement that <span
class="math inline">\(L^2\)</span> covering numbers do not grow like
<span class="math inline">\(n\)</span>.</p>
<div id="thm:dudley-metric-dimension-L2" class="theorem">
<p><strong>Theorem 3</strong> (Dudley). There exists a universal
constant <span class="math inline">\(C &gt; 0\)</span> such that <span
class="math display">\[\begin{aligned}
        \sup_{P \in \mathcal{P}(\mathscr X)} N(\varepsilon, \mathcal F,
\lVert \cdot \rVert_{\mathbf P\,\,\!\!, 2}) \leq \left(
\frac{C}{\varepsilon} \right)^{C \operatorname{VC}(\mathscr C)}
    
\end{aligned}\]</span> for all <span class="math inline">\(\varepsilon
&lt; 1\)</span>.</p>
</div>
<p>The principle by which this result holds lies in a very clever use of
symmetrization, thereby ensuring that in the case of <span
class="math inline">\(L^2\)</span> covering number, we can approximate
this arbitrarily well—even when we pick a sample size that is
independent of <span class="math inline">\(n\)</span>! This idea is
captured in the following result.</p>
<div id="lem:extraction" class="lemma">
<p><strong>Lemma 4</strong> (Principle of Probabilistic Extraction).
Suppose <span class="math inline">\(f_1, \dots, f_n\)</span> are
functions on <span class="math inline">\(\mathscr X\)</span> such that
<span class="math inline">\(\lVert f_i \rVert_\infty \leq 1\)</span> and
<span class="math inline">\(\lVert f_i - f_j \rVert_{\mathbf P\,\,\!\!,
2} &gt; \varepsilon\)</span> for all <span class="math inline">\(1 \leq
i &lt; j \leq n\)</span>. Then, there exists a universal constant <span
class="math inline">\(c\)</span> and <span class="math inline">\(r \leq
c \varepsilon^{-4} \log n\)</span> points, <span
class="math inline">\(\{x_1, \dots, x_r\}\)</span>, such that for <span
class="math inline">\(P_x \triangleq \frac1r \sum_{1 \leq k \leq r}
\delta_{x_k}\)</span>, we have <span
class="math display">\[\begin{aligned}
        \lVert f_i - f_j \rVert_{L^2 (P_x)} &gt;
\frac{\varepsilon}{2}  ~~ \text{for all } 1 \leq i &lt; j \leq n ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> Note that in the statement of the proof, the points
are stated not as random variables. But in principle, we start with
<span class="math inline">\(X_1, \dots, X_r\)</span> i.i.d. random
variables with distribution <span class="math inline">\(\mathbf
P\,\,\!\!\)</span>, and write <span class="math inline">\(\widehat P_r =
\frac1r \sum_{1 \leq k \leq r} \delta_{X_k}\)</span> to denote its
empirical measure. Therefore, by an application of the Azuma-Hoeffding
inequality, we must have <span class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( \lVert f_i - f_j \rVert_{\widehat P_r,
2} \leq \left( \frac{\varepsilon}{2} \right)^2 \right) &amp;\leq \mathbf
P\,\,\!\!\left( \lVert f_i - f_j \rVert_{\widehat P_r, 2} \leq \lVert
f_i - f_j \rVert_{\mathbf P\,\,\!\!, 2}^2 - \left( \frac{\sqrt{3}
\varepsilon}{2} \right)^2 \right) \\
        &amp;&lt; e^{-\frac{r\varepsilon^4}{15}} ~,
    
\end{aligned}\]</span> which holds true for all <span
class="math inline">\(i \neq j\)</span>. In other words, applying the
union bound, we must have <span class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( \lVert f_i - f_j \rVert_{\widehat P_r,
2} &gt; \frac{\varepsilon}{2} \text{ for all } i \neq j \right)
&amp;\geq 1 - n^2 e^{-\frac{r\varepsilon^4}{15}} &gt; 0 ~,
    
\end{aligned}\]</span> where the final inequality holds if <span
class="math inline">\(r &gt; 30 \varepsilon^{-4} \log n\)</span>.
Therefore, the desired result holds if <span class="math inline">\(r
\leq 30 \varepsilon^{-4} \log n\)</span>. ◻</p>
</div>
<div class="remark">
<p><strong>Remark 5</strong>. The principle of extraction follows from
the following heuristic. Suppose we have a maximal <span
class="math inline">\(\varepsilon\)</span>-packing of <span
class="math inline">\(\mathscr C\)</span> under <span
class="math inline">\(\lVert \cdot \rVert_{\mathbf P\,\,\!\!,
2}\)</span>; call this <span class="math inline">\(\{C_1, \dots,
C_N\}\)</span>. Then, if we draw some <span
class="math inline">\(r\)</span> random samples from <span
class="math inline">\(\mathbf P\,\,\!\!\)</span>, the law of large
numbers tell us that, roughly, <span class="math inline">\(\lVert
\mathbb 1_{C_i} - \mathbb 1_{C_j} \rVert_{\mathbf P\,\,\!\!, 2} \approx
\lVert \mathbb 1_{C_i} - \mathbb 1_{C_j} \rVert_{\widehat
P_r,2}\)</span>. But, a bit more is true: if we draw a large enough
sample from <span class="math inline">\(\mathbf P\,\,\!\!\)</span>, then
there is hope to say that <span class="math inline">\(\{C_1, \dots,
C_N\}\)</span> is a <span
class="math inline">\(\frac{\varepsilon}{2}\)</span>-packing of <span
class="math inline">\(\mathscr C\)</span> under <span
class="math inline">\(\lVert \cdot \rVert_{\mathbf P\,\,\!\!,
2}\)</span>. Therefore, for the points <span
class="math inline">\(\{x_1, \dots, x_r\}\)</span> drawn from <span
class="math inline">\(\mathbf P\,\,\!\!\)</span>, we define <span
class="math inline">\(P^r = \frac1r \sum_{1 \leq k \leq r}
\delta_{x_r}\)</span> as before, and we then have <span
class="math inline">\(N(\varepsilon, \mathscr C, \lVert \cdot
\rVert_{\mathbf P\,\,\!\!, 2}) \leq N(\frac{\varepsilon}{4}, \mathscr C,
\lVert \cdot \rVert_{\widehat P_r,2}) \leq N(\frac{\varepsilon}{4},
\mathscr C, \lVert \cdot \rVert_{\widehat P_r,\infty}) \lesssim
r^{\operatorname{VC}(\mathscr C)}\)</span>. Note what we have
accomplished in this construction: we have “shown” that the <span
class="math inline">\(L^\infty\)</span> covering number is “too large”,
and we can achieve the exact same goal of bounding the random <span
class="math inline">\(L^2\)</span> covering number from above by
discarding points that “don’t help” separating the sets <span
class="math inline">\(C_1, \dots, C_N\)</span>. In particular, there is
hope to choose <span class="math inline">\(r\)</span> in such a way that
this is independent of the original sample size <span
class="math inline">\(n\)</span>—we can choose <span
class="math inline">\(r\)</span> that only depends on <span
class="math inline">\(\varepsilon\)</span> and <span
class="math inline">\(N\)</span>!</p>
</div>
<div class="proof">
<p><em>Proof of Theorem <a href="#thm:dudley-metric-dimension-L2"
data-reference-type="ref"
data-reference="thm:dudley-metric-dimension-L2">3</a>.</em> Let <span
class="math inline">\(P \in \mathcal{P}(\mathscr X)\)</span>. Suppose
<span class="math inline">\(C_1, \dots, C_n\)</span> is a maximal <span
class="math inline">\(\varepsilon\)</span>-packing of <span
class="math inline">\(\mathscr C\)</span> under the <span
class="math inline">\(L^2(\mathbf P\,\,\!\!)\)</span>-norm. Then, the
principle of extraction (Lemma <a href="#lem:extraction"
data-reference-type="ref" data-reference="lem:extraction">4</a>) tells
us there exists a <span class="math inline">\(r\)</span> and points
<span class="math inline">\(x_1, \dots, x_r\)</span> such that <span
class="math inline">\(C_1, \dots, C_n\)</span> is (still an) <span
class="math inline">\(\varepsilon\)</span>-packing of <span
class="math inline">\(\mathscr C\)</span> <em>under the</em> <span
class="math inline">\(L^2(\mathbf P\,\,\!\!_r)\)</span> norm. Therefore,
the Sauer-Shelah lemma tells us <span
class="math display">\[\begin{aligned}
        n \leq |\mathscr C \cap \{x_1, \dots, x_r\}| &amp;\leq \left(
\frac{r e}{\operatorname{VC}(\mathscr C)}
\right)^{\operatorname{VC}(\mathscr C)} \\
        &amp;\leq \left( \frac{ c e \log n}{\varepsilon^4
\operatorname{VC}(\mathscr C)} \right)^{\operatorname{VC}(\mathscr C)} =
\left( \frac{2 c e \log n}{2 \varepsilon^4 \operatorname{VC}(\mathscr
C)} \right)^{\operatorname{VC}(\mathscr C)}  ~. \\
        \end{aligned}\]</span>

<p>Because $n^d \geq d \log n$, it then follows that we
have</p>

<span class="math display">\[\begin{aligned}
        &amp;\leq \left( 2 c e \varepsilon^{-4}
\right)^{2\operatorname{VC}(\mathscr C)} ~.
    
\end{aligned}\]</span> By the fact that covering and packing numbers
scale identically in <span class="math inline">\(\varepsilon\)</span>
(Lemma <a href="{% post_url 2026-06-15-tools-to-study-the-complexity-of-function-classes %}#lem:covering-packing-comparisons"
data-reference-type="ref"
data-reference="lem:covering-packing-comparisons">[lem:covering-packing-comparisons]</a>),
we have that <span class="math inline">\(n \geq N(\varepsilon, \mathcal
F, \lVert \cdot \rVert_{\mathbf P\,\,\!\!, 2})\)</span>, which concludes
the proof. ◻</p>
</div>
<p>The VC dimension can then allow us to uniformly control the <span
class="math inline">\(L^2\)</span> covering numbers of a class of sets
<span class="math inline">\(\mathscr C\)</span> in terms of its
combinatorial structure. In particular, we can now obtain the optimal
rate in the uniform law of large numbers for classes of <em>finite</em>
VC dimension.</p>
<div id="thm:u-g-c-classes" class="theorem">
<p><strong>Theorem 6</strong> (Uniform Glivenko-Cantelli). There is a
universal constant <span class="math inline">\(K\)</span> such that for
any class <span class="math inline">\(\mathscr C\)</span> of measurable
subsets of <span class="math inline">\(\mathscr X\)</span> and <span
class="math inline">\(n \geq 1\)</span>, we have <span
class="math display">\[\begin{aligned}
        \sup_{P \in \mathcal{P}(\mathscr X)} \mathbb E \sup_{C \in
\mathscr C} |\widehat P_n (C) - \mathbf P\,\,\!\!(C)| \leq K
\sqrt{\frac{\operatorname{VC}(\mathscr C)}{n}} ~,
    
\end{aligned}\]</span> where, as before, the supremum is taken over all
probability measures <span class="math inline">\(\mathbf
P\,\,\!\!\)</span> on <span class="math inline">\(\mathscr
X\)</span>.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Applying symmetrization and Dudley’s uniform bound on
<span class="math inline">\(L^2\)</span> covering numbers (Theorem <a
href="#thm:dudley-metric-dimension-L2" data-reference-type="ref"
data-reference="thm:dudley-metric-dimension-L2">3</a>), and noting that
the diameter of <span class="math inline">\(\mathscr C\)</span> is at
most one under <span class="math inline">\(\lVert \cdot \rVert_{\mathbf
P\,\,\!\!, 2}\)</span>, we have <span
class="math display">\[\begin{aligned}
         \mathbb E \sup_{C \in \mathscr C} |\widehat P_n (C) - \mathbf
P\,\,\!\!(C)| &amp;\leq \frac{K&#39;}{\sqrt{n}} \mathbb E \left[
\int_0^1 \sqrt{\log N(\varepsilon, \mathscr C, \lVert \cdot
\rVert_{\widehat P_n, 2}) \mathrm{d} \varepsilon} \right]  \\
         &amp;\leq \sqrt{\frac{\operatorname{VC}(\mathscr C)}{n}} K&#39;
\int_0^1 \sqrt{K \log \frac{K}{\varepsilon} \mathrm{d} \varepsilon} ~,
    
\end{aligned}\]</span> as desired. ◻</p>
</div>
<p>An immediate consequence of all of the discussion above is, if we
apply Theorem <a href="#thm:u-g-c-classes" data-reference-type="ref"
data-reference="thm:u-g-c-classes">6</a> to <span
class="math inline">\(\mathcal F_1\)</span> (the collection of indicator
functions defined on <span class="math inline">\((-\infty, x]\)</span>
for all <span class="math inline">\(x \in \mathbb R\)</span>), we
immediate obtain that <span class="math inline">\(\sup_{x \in \mathbb R}
|\widehat F_n (x) - F(x)| \leq \frac{K}{\sqrt{n}} + \sqrt{\frac{2}{n}
\log \frac{1}{\varepsilon}}\)</span> with at least probability <span
class="math inline">\(1-\varepsilon\)</span>. This immediately gives us
the Glivenko-Cantelli theorem.</p>
<p>We revisit the study of empirical processes again, by returning to
Boolean functions. The following result can be deduced from all the
discussions above.</p>
<div id="thm:empirical-process-boolean-functions-VC-dimension"
class="theorem">
<p><strong>Theorem 7</strong>. Let <span class="math inline">\(\mathcal
F\)</span> denote a class of Boolean functions with finite VC dimension.
Let <span class="math inline">\(X, X_1, \dots, X_n\)</span> be
independent random variables with law <span
class="math inline">\(\mathbf P\,\,\!\!\)</span>. Then, with the
knowledge that the expectation below depends on <span
class="math inline">\(\mathbf P\,\,\!\!\)</span>, for some absolute
constant <span class="math inline">\(C\)</span>, <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{f \in \mathcal F} \: \left| \frac1n \sum_{1 \leq
k \leq n} f(X_k) - \mathbb E f(X) \right| \leq C
\sqrt{\frac{\operatorname{VC}(\mathcal F)}{n}} ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> The arguments are relatively standard, and follows
from symmetrization and a clever use of Dudley’s entropy bound. For
convenience for what follows, we add the zero function to <span
class="math inline">\(\mathcal F\)</span> (this is inconsequential for
the arguments that follow).</p>
<p>To begin, symmetrization gives us the upper bound <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{f \in \mathcal F} \: \left| \frac1n \sum_{1 \leq
k \leq n} f(X_k) - \mathbb E f(X) \right| \leq \frac{2}{\sqrt{n}}
\mathbb E \sup_{f \in \mathcal F} \: \left| \frac{1}{\sqrt{n}} \sum_{1
\leq k \leq n} \varepsilon_k f(X_k) \right| ~,
    
\end{aligned}\]</span> where <span class="math inline">\(\varepsilon_1,
\dots, \varepsilon_k\)</span> are independent Rademacher random
variables. For notational simplicity, let us write <span
class="math inline">\(Y_f = \frac{1}{\sqrt{n}} \sum_{1 \leq k \leq n}
\varepsilon_k f(X_k)\)</span>, and set <span
class="math inline">\(Y_0\)</span> to be the zero function in <span
class="math inline">\(\mathcal F\)</span>. Conditional on <span
class="math inline">\(\varepsilon_1, \dots, \varepsilon_n\)</span>, we
have that the increments of <span class="math inline">\(\{Y_f\}_{f \in
\mathcal F}\)</span> are subgaussian (see the discussions in Example <a
href="{% post_url 2026-06-15-fundamental-techniques %}#eg:rademacher-subgaussian" data-reference-type="ref"
data-reference="eg:rademacher-subgaussian">[eg:rademacher-subgaussian]</a>
and Remark <a href="{% post_url 2026-06-15-tools-to-study-the-complexity-of-function-classes %}#rem:g-c-uniform-entropy" data-reference-type="ref"
data-reference="rem:g-c-uniform-entropy">[rem:g-c-uniform-entropy]</a>).
Taking the expectation to undo the conditioning on <span
class="math inline">\(\varepsilon_1, \dots, \varepsilon_n\)</span>, we
obtain the desired conclusion on the increments being subgaussian.
Therefore, we can apply Theorem <a href="{% post_url 2026-06-15-tools-to-study-the-complexity-of-function-classes %}#thm:dudley-entropy-finite-T"
data-reference-type="ref"
data-reference="thm:dudley-entropy-finite-T">[thm:dudley-entropy-finite-T]</a>
conditional on <span class="math inline">\(X_1, \dots, X_n\)</span>, and
obtain <span class="math display">\[\begin{aligned}
        \frac{2}{\sqrt{n}} \mathbb E \sup_{f \in \mathcal F} \: |Y_f| =
\mathbb E \sup_{f \in \mathcal F} \: |Y_f - Y_0| \lesssim
\frac{1}{\sqrt{n}} \mathbb E \int_0^{\operatorname{diam}(T)} \sqrt{\log
N(\varepsilon, \mathcal F, \lVert \cdot \rVert_{\widehat P_n, 2})} \mathrm{d}
\varepsilon
    
\end{aligned}\]</span> by the triangle inequality. The expectation in
the rightmost term undoes the conditioning on <span
class="math inline">\(X_1, \dots, X_n\)</span> that we had when we
applied Dudley’s entropy bound. We can bound the rightmost term above by
Dudley’s metric dimension bound in Theorem <a
href="#thm:dudley-metric-dimension-L2" data-reference-type="ref"
data-reference="thm:dudley-metric-dimension-L2">3</a>; doing so, we
obtain <span class="math display">\[\begin{aligned}
        \log N(\varepsilon, \mathcal F, \lVert \cdot \rVert_{\widehat
P_n, 2}) \lesssim \operatorname{VC}(\mathcal F) \log
\frac{C}{\varepsilon} ~.
    
\end{aligned}\]</span> Combining everything, and noting that the
diameter of <span class="math inline">\(\mathcal F\)</span> is at most
<span class="math inline">\(1\)</span> under <span
class="math inline">\(\lVert \cdot \rVert_{\mathbf P\,\,\!\!,
2}\)</span>, we then have <span class="math display">\[\begin{aligned}
        \frac{2}{\sqrt{n}} \sup_{f \in \mathcal F} \: |Y_f| \lesssim
\sqrt{\frac{\operatorname{VC}(\mathcal F)}{n}} ~,
    
\end{aligned}\]</span> where constants obtained from integration are for
sure bounded by some absolute constants. This concludes the proof. ◻</p>
</div>
<p>The theory of VC classes extends beyond classes of sets and indicator
(Boolean) functions. In fact, we can discuss VC classes of functions
once we define a suitable notion of “covering” function classes. We can
do so via <em>subgraphs</em>. A subgraph of a function <span
class="math inline">\(f : \mathscr X \to \mathbb R\)</span> is defined
as <span class="math display">\begin{equation}\label{eq:subgraph}\begin{aligned}

    S_f \triangleq \{ (x,t) \in \mathscr X \times \mathbb R : t &lt;
f(x) \} ~.
\end{aligned}\end{equation}</span> We can then think of a VC class of functions as
follows: a class of measurable functions <span
class="math inline">\(\mathcal F\)</span> defined on <span
class="math inline">\(\mathscr X\)</span> constitutes a VC class if
<span class="math inline">\(\{S_f : f \in \mathcal F\}\)</span> is a VC
class (of sets) of <span class="math inline">\(\mathscr X \times \mathbb
R\)</span>. To distinguish the VC dimension of sets from the VC
dimension of a class of functions, we write <span
class="math inline">\(\operatorname{V}(\mathcal F)\)</span> to denote
the VC dimension of <em>subgraphs</em> of all functions <span
class="math inline">\(f \in \mathcal F\)</span>. The following result is
not surprising given our discussion above, but proving it requires a bit
of work. In words, the covering number of a VC class of functions with
scales polynomially in the VC dimension.</p>
<div id="thm:covering-number-vc-class-functions" class="theorem">
<p><strong>Theorem 8</strong>. For a VC class of functions <span
class="math inline">\(\mathcal F\)</span> with a measurable envelope
<span class="math inline">\(F\)</span>, for all <span
class="math inline">\(r \geq 1\)</span> and any probability measures
<span class="math inline">\(\mathbf P\,\,\!\!\)</span> such that <span
class="math inline">\(\lVert F \rVert_{P,r} &gt; 0\)</span>, there
exists a universal constant <span class="math inline">\(K\)</span> such
that for all <span class="math inline">\(\varepsilon \in [0,1)\)</span>,
<span class="math display">\[\begin{aligned}
        N(\varepsilon \lVert F \rVert_{P,r}, \mathcal F, \lVert \cdot
\rVert_{\mathbf P\,\,\!\!,r}) \leq K \operatorname{V}(\mathcal F)
4e^{\operatorname{V}(\mathcal F)} \left( \frac{2}{\varepsilon}
\right)^{r \operatorname{V}(\mathcal F)} ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> To distinguish a set of sets of elements from a set
of sets of functions, we write <span class="math inline">\(\mathcal S
\triangleq \{ S_f : f \in \mathcal F \}\)</span>. Let <span
class="math inline">\(\lambda\)</span> denote the Lebesgue measure on
<span class="math inline">\(\mathbb R\)</span>. For any probability
measure <span class="math inline">\(\mathbf P\,\,\!\!\)</span> as given
in the hypothesis, we can write <span
class="math display">\[\begin{aligned}
        P |f-g| = (P \times \lambda) |\mathbb 1_{S_f} - \mathbb 1_{S_g}|
~, % (P \times \lambda) \mathbb 1_{S_f \triangle S_g}
    
\end{aligned}\]</span> which follows from the fact that for all <span
class="math inline">\(a,b \in \mathbb R\)</span>, <span
class="math inline">\(|b-a| = \int |\mathbb 1\{t &lt; b\} - \mathbb 1\{t
&lt; a\}| \mathrm{d} t\)</span>. Therefore, if we renormalize <span
class="math inline">\(P \times \lambda\)</span> on the set <span
class="math inline">\(\{ (x,t) :|t| \leq F(x) \}\)</span>, where <span
class="math inline">\(F\)</span> is the envelope function of <span
class="math inline">\(\mathcal F\)</span>, we can then define <span
class="math inline">\(\widetilde P \triangleq \frac{P \times \lambda}{2
\lVert F \rVert_{P,1}}\)</span>. Combining everything, we must have
<span class="math inline">\(\widetilde P|\mathbb 1_{S_f} - \mathbb
1_{S_g}| = \frac{P|f-g|}{2 \lVert F \rVert_{P,1}}\)</span>, so <span
class="math display">\[\begin{aligned}
        N(2 \varepsilon \lVert F \rVert_{P,1}, \mathcal F, \lVert \cdot
\rVert_{\mathbf P\,\,\!\!,1}) = N(\varepsilon, \mathcal S, \lVert \cdot
\rVert_{\widetilde P,1}) ~.
    
\end{aligned}\]</span> We can then apply the result on the VC classes of
sets to directly conclude the proof for <span
class="math inline">\(r=1\)</span>.</p>
<p>For <span class="math inline">\(r \geq 2\)</span>, note the following
elementary inequality holds: <span
class="math display">\[\begin{aligned}
        P|f-g|^r \leq P\{ (2F)^{r-1} |f-g| \} = 2^{r-1} P F^{r-1} Q
|f-g| ~,
    
\end{aligned}\]</span> where <span class="math inline">\(Q\)</span> is
the probability measure defined with respect to <span
class="math inline">\(\mathbf P\,\,\!\!\)</span>, and has the density
<span class="math inline">\(\frac{F^{r-1}}{P F^{r-1}}\)</span>. We now
have a suitable cover for <span class="math inline">\(\mathcal
F\)</span>: setting <span class="math inline">\(N = N(2
(\frac{\varepsilon}{2})^r QF, \mathcal F, \lVert \cdot
\rVert_{Q,r})\)</span>, we write <span class="math inline">\(f_1, \dots,
f_N\)</span> to denote a <span class="math inline">\(2
(\frac{\varepsilon}{2})^r QF\)</span>-cover for <span
class="math inline">\(\mathcal F\)</span> under <span
class="math inline">\(\lVert \cdot \rVert_{Q,r}\)</span>. So, for any
<span class="math inline">\(f \in \mathcal F\)</span>, there exists a
<span class="math inline">\(k \in \{1, \dots, N\}\)</span> such that
<span class="math inline">\(Q |f - f_k| \leq 2 (\frac{\varepsilon}{2})^r
QF\)</span>. Putting everything together, we then have <span
class="math display">\[\begin{aligned}
        Q |f - f_k|^r &amp;\leq 2^{r-1} P F^{r-1} Q |f-f_k| \\
        &amp;\leq PF^{r-1} 2^r \left(\frac{\varepsilon}{2}\right)^r QF =
\varepsilon^r P F^r ~.
    
\end{aligned}\]</span> We’ve obtained an upper bound on <span
class="math inline">\(Q |f - f_k|\)</span> using the envelope of <span
class="math inline">\(\mathcal F\)</span>. Therefore, <span
class="math display">\[\begin{aligned}
        N(\varepsilon \lVert F \rVert_{P,r}, \mathcal F, \lVert \cdot
\rVert_{\mathbf P\,\,\!\!,r}) \leq N \left( 2
\left(\frac{\varepsilon}{2}\right)^r QF, \mathcal F, \lVert \cdot
\rVert_{Q,1} \right) ~,
    
\end{aligned}\]</span> from which we apply the case where <span
class="math inline">\(r=1\)</span> to conclude. ◻</p>
</div>
<div class="remark">
<p><strong>Remark 9</strong>. The discussion in Theorem <a
href="#thm:covering-number-vc-class-functions" data-reference-type="ref"
data-reference="thm:covering-number-vc-class-functions">8</a> shows that
a VC class of functions has a finite uniform entropy integral.</p>
</div>
<div class="example">
<p><strong>Example 10</strong> (VC dimension does <em>not</em> equal the
number of parameters in a function class). Take any scalar <span
class="math inline">\(t \in \mathbb R\)</span>, and define the function
<span class="math inline">\(f_t (x) = \operatorname{sign}(\sin
tx)\)</span>. Consider the function class <span
class="math inline">\(\mathcal F = \{f_t : [-1,1]\to \mathbb R : t \in
\mathbb R\}\)</span>. We can argue directly that this set has infinite
VC dimension.</p>
<p>To see why, let <span class="math inline">\(I_0 = \emptyset\)</span>,
and define <span class="math inline">\(I_n \triangleq \{ t \in [0, 1] :
\sin(2 \pi t / 2^{2-n}) \ge 0 \}\)</span> for all <span
class="math inline">\(n \geq 1\)</span>. By definition, we then have
<span class="math inline">\(I_0 = \emptyset\)</span>, <span
class="math inline">\(I_1 = [0,1]\)</span>, <span
class="math inline">\(I_2 = [0,\frac12]\)</span>, <span
class="math inline">\(I_3 = [0,\frac14] \cup [\frac12,
\frac34]\)</span>, and so on. For a given <span
class="math inline">\(k\)</span> points, assign a subset of <span
class="math inline">\(k\)</span> points to each of the <span
class="math inline">\((I_i)_{i=0}^{2^k}\)</span> subintervals
constructed. It then follows that once we “trace through the intervals”
created above, every point is uniquely assigned to an interval in the
partition of <span class="math inline">\([0,1]\)</span> determined by
<span class="math inline">\((I_i)_{i=0}^{2^k}\)</span>. With these
assignments, the function class shatters some points for all <span
class="math inline">\(k \in \mathbb N\)</span>, therefore the VC
dimension of <span class="math inline">\(\mathcal F\)</span> is
infinite.</p>
</div>
<div class="lemma">
<p><strong>Lemma 11</strong> (Convex hull). Suppose <span
class="math inline">\(\mathcal F \subset L^1(\mathbf P\,\,\!\!)\)</span>
satisfies the uniform law of large numbers. Define the <em>convex
hull</em> of the function class <span class="math inline">\(\mathcal
F\)</span> as <span class="math display">\[\begin{aligned}
        \operatorname{Conv}(\mathcal F) \triangleq \left\{ \sum_{1 \leq
i \leq n} \theta_j f_j : \theta_j \geq 0 ~,~ f_j \in \mathcal F \text{
for } 1 \leq i \leq n ~, \sum_{1 \leq i \leq n} \theta_i = 1 \text{ and
} n \geq 1 \right\} ~.
    
\end{aligned}\]</span> Then, <span
class="math inline">\(\operatorname{Conv}(\mathcal F)\)</span> satisfies
the uniform law of large numbers.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Fix <span class="math inline">\(\varepsilon &gt;
0\)</span>. Then, pick a sufficiently large integer <span
class="math inline">\(n\)</span> such that <span
class="math display">\[\begin{aligned}
        \sup_{f \in \mathcal F} \left| \int f \mathrm{d} \, (\widehat P_n -
\mathbf P\,\,\!\!) \right| \leq \varepsilon ~.
    
\end{aligned}\]</span> For <span class="math inline">\(\theta_j \geq
0\)</span> and <span class="math inline">\(f_j \in \mathcal F\)</span>
for all <span class="math inline">\(j\)</span>, we obtain <span
class="math display">\[\begin{aligned}
        \left| \int \sum_{1 \leq i \leq n} \theta_i f_i \mathrm{d} \,
(\widehat P_n - \mathbf P\,\,\!\!) \right| &amp;= \left| \sum_{1 \leq i
\leq n} \theta_i \int f_i \mathrm{d} \, (\widehat P_n - \mathbf P\,\,\!\!)
\right| \\
        &amp;\leq \left( \sum_{1 \leq i \leq n} \theta_i \right) \sup_{1
\leq i \leq n} \left| \int \theta_i \int f_i \mathrm{d} \, (\widehat P_n -
\mathbf P\,\,\!\!) \right| \leq \varepsilon ~,
    
\end{aligned}\]</span> which shows the desired statement. ◻</p>
</div>
<div class="corollary">
<p><strong>Corollary 12</strong>. Suppose <span
class="math inline">\(\mathcal F\)</span> is a VC class with a
measurable envelope <span class="math inline">\(F \in L^1 (\mathbf
P\,\,\!\!)\)</span>. Then, <span class="math inline">\(\mathcal
F\)</span> satisfies the uniform law of large numbers.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Follows directly from Theorem <a
href="#thm:covering-number-vc-class-functions" data-reference-type="ref"
data-reference="thm:covering-number-vc-class-functions">8</a>. ◻</p>
</div>
<div id="thm:max-inequality-vc-class-functions-uniform-envelope"
class="theorem">
<p><strong>Theorem 13</strong>. Let <span class="math inline">\(\mathcal
F\)</span> be a measurable class of functions. Suppose <span
class="math inline">\(\mathcal F\)</span> has a constant envelope
function <span class="math inline">\(F\)</span>, such that for <span
class="math inline">\(A &gt; e^2\)</span> and <span
class="math inline">\(V \geq 2\)</span> <em>and</em> for every finitely
supported probability measure <span class="math inline">\(\mathbf
P\,\,\!\!\)</span>, the condition <span class="math display">\begin{equation}\label{thm:max-inequality-vc-class-functions-uniform-envelope-a1}\begin{aligned}

        N(\varepsilon F, \mathcal F, \lVert \cdot \rVert_{\mathbf
P\,\,\!\!, 2}) \leq \left( \frac{A}{\varepsilon} \right)^V
    
\end{aligned}\end{equation}</span> holds for all <span
class="math inline">\(\varepsilon \in [0,1)\)</span>. Then, for all
<span class="math inline">\(n\)</span>, there exists a universal
constant <span class="math inline">\(K\)</span> <em>and</em> a constant
<span class="math inline">\(\sigma\)</span> satisfying <span
class="math inline">\(\sup_{f \in \mathcal F} P (f-\mathbf P\,\,\!\!f)^2
\leq \sigma^2\)</span>, such that <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{f \in \mathcal F} \left\{ \sum_{1 \leq k \leq n}
f(X_k) - \mathbf P\,\,\!\!f \right\} \leq K \left( \sqrt{n} \sigma
\sqrt{V \log \frac{AU}{\sigma}} \vee VU \log \frac{AU}{\sigma} \right)
~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> The result follows from symmetrization and direct
calculations. Note that it is without loss to assume that the class of
functions contain the zero function, and are centred with respect to
<span class="math inline">\(\mathbf P\,\,\!\!\)</span>. So, we can
restrict the proof to the case where our constant envelope function
<span class="math inline">\(F \equiv 1\)</span>.</p>
<p>By standard symmetrization arguments, we have <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{f \in \mathcal F} \left\{ \sum_{1 \leq k \leq n}
f(X_k) \right\} &amp; \leq \mathbb E \sup_{f \in \mathcal F} \left|
\sum_{1 \leq k \leq n} \varepsilon_k f(X_k) \right| \leq 2 \mathbb E
\sup_{f \in \mathcal F} \left\{ \sum_{1 \leq k \leq n} \varepsilon_k
f(X_k) \right\} ~,
    
\end{aligned}\]</span> where <span class="math inline">\(\varepsilon_1,
\dots, \varepsilon_n\)</span> are i.i.d. Rademacher random variables. It
follows from Dudley’s entropy bound that there exists some universal
constant <span class="math inline">\(L\)</span> such that <span
class="math display">\[\begin{aligned}
        \frac{1}{\sqrt{n}} \mathbb E \left[ \sup_{f \in \mathcal F}
\left\{ \sum_{1 \leq k \leq n} \varepsilon_k f(X_k) \right\}
\,\,\Bigg|\,\, \varepsilon_1, \dots, \varepsilon_n \right] \leq L
\sqrt{V} \int_0^{\sqrt{D}} \sqrt{\log \frac{A}{\varepsilon}} \mathrm{d}
\varepsilon ~,
    
\end{aligned}\]</span> where the inequality follows from \eqref{thm:max-inequality-vc-class-functions-uniform-envelope-a1},
and <span class="math inline">\(D = \sup_{f \in \mathcal F} |\widehat
P_n f|\)</span>. Since, for all <span class="math inline">\(f \in
\mathcal F\)</span>, <span class="math inline">\(|f| \leq 1\)</span> by
our assumption that <span class="math inline">\(F \equiv 1\)</span>, we
have that <span class="math inline">\(\frac{A}{D} \geq e^2\)</span>.
Furthermore, by the concavity of <span class="math inline">\(\log
x\)</span> on <span class="math inline">\(x \in (0,1)\)</span>, it
follows that if <span class="math inline">\(\log \frac{C}{c} \geq
2\)</span>, we have <span class="math display">\[\begin{aligned}
        \int_0^c \sqrt{\log \frac{C}{x}} \mathrm{d} x \leq 2c \sqrt{\log
\frac{C}{c}} ~.
    
\end{aligned}\]</span> Finally, note that <span
class="math inline">\(\sqrt{-x \log x}\)</span> is concave on <span
class="math inline">\((0,\frac1e)\)</span>. Therefore, we have <span
class="math display">\[\begin{aligned}
        \frac{1}{\sqrt{n}} \mathbb E \left[ \sup_{f \in \mathcal F}
\left\{ \sum_{1 \leq k \leq n} \varepsilon_k f(X_k) \right\}
\,\,\Bigg|\,\, \varepsilon_1, \dots, \varepsilon_n \right] &amp;\leq 2 L
\sqrt{V} \sqrt{D} \sqrt{\log \frac{A}{D}} \\
        &amp;\leq 2 L \sqrt{V} \sqrt{\mathbb E D} \sqrt{\log
\frac{A}{\mathbb E D}} ~.
    
\end{aligned}\]</span> We also have the following crude variance bound
with respect to <span class="math inline">\(\widehat P_n\)</span>: <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{f \in \mathcal F} |\widehat P_n f^2| &amp;\leq
\sigma^2 + \frac{1}{n} \mathbb E \sup_{f \in \mathcal F} \left| \sum_{1
\leq k \leq n} f(X_k)^2 - \mathbf P\,\,\!\!f^2 \right| \\
        &amp;\leq \sigma^2 + \frac2n \mathbb E \sup_{f \in \mathcal F}
\left| \sum_{1 \leq k \leq n} \varepsilon_k f(X_k)^2 \right| ~.
    
\end{aligned}\]</span> Again, because <span class="math inline">\(|f|
\leq 1\)</span>, we have <span class="math inline">\(\widehat P_n
(f^2-g^2)^2 \leq 4 \widehat P_n(f-g)^2\)</span>, which then implies the
inequality <span class="math inline">\(N(\varepsilon, \mathcal F^2,
\lVert \cdot \rVert_{\widehat P_n, 2}) \leq N(\frac{\varepsilon}{2},
\mathcal F, \lVert \cdot \rVert_{\widehat P_n, 2})\)</span>. Therefore,
by a change of variable <span class="math inline">\(\eta =
\frac{\varepsilon}{2}\)</span>, we have <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{f \in \mathcal F} |\widehat P_n f^2| &amp;\leq
\sigma^2 + \frac2n \mathbb E \sup_{f \in \mathcal F} \left| \sum_{1 \leq
k \leq n} \varepsilon_k f(X_k)^2 \right| \\
        &amp;\leq \sigma^2 + 4K \sqrt{\frac{V}{n}} \mathbb E \left[
\int_0^D \sqrt{\log \frac{A}{\eta}} \mathrm{d} \eta \right] \leq \sigma^2 + 8K
\sqrt{\frac{V}{n}} M ~,
    
\end{aligned}\]</span> where <span class="math inline">\(M \triangleq
\sqrt{\mathbb E D} \sqrt{\log \frac{A}{\mathbb E D}}\)</span>. It
remains to analyze <span class="math inline">\(M\)</span>. Since <span
class="math inline">\(\mathbb E D \leq \sigma^2 + 8K \sqrt{\frac{V}{n}}
M\)</span>, we have <span class="math display">\[\begin{aligned}
        M^2 &amp; \leq \left( \sigma^2 + 8K \sqrt{\frac{V}{n}} M \right)
\log \frac{A}{\sigma^2 + 8K \sqrt{\frac{V}{n}} M} ~.
        \end{aligned}\]</span>

<p>But $\frac{A}{\sigma^2 + 8K \sqrt{\frac{V}{n}} M}
&lt; e^2$, so $\log \frac{A}{\sigma^2 + 8K \sqrt{\frac{V}{n}} M} &lt;
\log \frac{A}{\sigma}$, therefore</p>

<span class="math display">\[\begin{aligned}
        M^2 &amp; \leq \left( \sigma^2 + 8K \sqrt{\frac{V}{n}} M \right)
\log \frac{A}{\sigma} ~.
    
\end{aligned}\]</span> So, the constant <span
class="math inline">\(M\)</span> is dominated by the larger (in absolute
value) root of <span class="math inline">\(M^2 - 8K \sqrt{\frac{V}{n}} M
\log \frac{A}{\sigma} - \sigma^2 \log \frac{A}{\sigma}\)</span>. Solving
for this root gives us the desired universal constant <span
class="math inline">\(K\)</span>. ◻</p>
</div>
<div class="example">
<p><strong>Example 14</strong> (Revisiting Example <a
href="{% post_url 2026-06-16-more-on-the-uniform-law-of-large-numbers %}#ex:bounding-rademacher-complexity-quadratic"
data-reference-type="ref"
data-reference="ex:bounding-rademacher-complexity-quadratic">[ex:bounding-rademacher-complexity-quadratic]</a>).
First, we rely on a general result: polynomials of degree <span
class="math inline">\(n\)</span>, denoted <span
class="math inline">\(\mathcal{P}_n\)</span>, has VC dimension of <span
class="math inline">\(n+1\)</span>. To see this, note that any
polynomial of degree <span class="math inline">\(n\)</span> has at mots
<span class="math inline">\(n\)</span> roots, therefore the roots change
signs at most <span class="math inline">\(n\)</span> times. As such,
polynomial of degree <span class="math inline">\(n\)</span> can form an
alternating pattern <span
class="math inline">\((+,-,+,-,\dots)\)</span>, or <span
class="math inline">\((-,+,-,+,\dots)\)</span>, of length <span
class="math inline">\(n+2\)</span>, which shows the VC dimension of
<span class="math inline">\(\mathcal{P}_n\)</span> cannot exceed <span
class="math inline">\(n+1\)</span>. At the same time, note that for any
given pair of coordinates <span class="math inline">\(\{(x_i,y_i)\}_{1
\leq i \leq n+1}\)</span>, the Lagrange interpolation formula gives us a
degree <span class="math inline">\(n\)</span> polynomial that passes
through these points. Suppose <span class="math inline">\(y_i = \pm
1\)</span> for all <span class="math inline">\(1 \leq i \leq
n+1\)</span>. Then, any set of <span class="math inline">\(n+1\)</span>
points is shattered (if not, then the interpolation doesn’t pass through
all <span class="math inline">\(n+1\)</span> points, which is clearly
insane). Therefore, the VC dimension of <span
class="math inline">\(\mathcal{P}_n\)</span> is <span
class="math inline">\(n+1\)</span>.</p>
<p>Using this, we note that <span
class="math inline">\(\mathcal{P}_2\)</span> has VC dimension of <span
class="math inline">\(3\)</span>. Therefore, the symmetrized process
satisfies <span class="math display">\[\begin{aligned}
        \mathbb E_\varepsilon \sup_{f_\eta \in \mathcal{P}_2 : \lVert
f_\eta \rVert_{\mathbf P\,\,\!\!, 2} \leq \delta} \left| \frac1n \sum_{1
\leq k \leq n} \varepsilon_k f(x_k) \right| \lesssim \sqrt{\frac{3
\log(n+1)}{n}} ~,
    
\end{aligned}\]</span> which holds for any sample <span
class="math inline">\(\{x_i\}_{1 \leq i \leq n}\)</span>. This, in
conjunction with Theorem <a
href="{% post_url 2026-06-16-more-on-the-uniform-law-of-large-numbers %}#thm:bounding-rademacher-complexity-star-shaped-c-unif-bouned"
data-reference-type="ref"
data-reference="thm:bounding-rademacher-complexity-star-shaped-c-unif-bouned">[thm:bounding-rademacher-complexity-star-shaped-c-unif-bouned]</a>,
gives us the fact that we can choose some <span
class="math inline">\(c_0\)</span> such that <span
class="math inline">\(\delta_n = c_0 \left( \frac{\log(n+1)}{n}
\right)^{\frac14}\)</span>. So, for any <span class="math inline">\(t
\geq \delta_n\)</span>, we have, for all <span class="math inline">\(f
\in \mathcal{P}_2\)</span>, <span class="math display">\[\begin{aligned}
        |\lVert f \rVert_{\widehat P_n, 2} - \lVert f \rVert_{\mathbf
P\,\,\!\!, 2}| &lt; \frac{\lVert f \rVert_{\mathbf P\,\,\!\!, 2} +
t^2}{2}
    
\end{aligned}\]</span> which holds with probability at least <span
class="math inline">\(1 - c_1 e^{-c_2 nt^2}\)</span>. Unlike before,
this argument only gives us that <span class="math inline">\(\lVert f
\rVert_{\widehat P_n, 2}\)</span> and <span class="math inline">\(\lVert
f \rVert_{\mathbf P\,\,\!\!, 2}\)</span> are of the same order for
functions <span class="math inline">\(f\)</span> satisfying <span
class="math inline">\(\lVert f \rVert_{\mathbf P\,\,\!\!, 2} \geq c_0
\left( \frac{\log(n+1)}{n} \right)^{\frac14}\)</span>. The rate derived
here is suboptimal relative to the earlier discussion.</p>
</div>
{% endraw %}
