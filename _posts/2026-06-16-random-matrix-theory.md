---
layout: post
title: "Random Matrix Theory"
date: 2026-06-16
tags: [math, statistics]
excerpt: >-
  This section serves as a primer for random matrix theory. We will use all the building blocks developed in the previous sections to develop and study universality results in random matrix theory.
---
{% raw %}
<span id="sec:rmt"></span>

<p>This section serves as a primer for random matrix theory. We will use
all the building blocks developed in the previous sections to develop
and study <em>universality</em> results in random matrix theory.</p>
<p>To start, we recap a number of things from the theory of eigenvalues
of <span class="math inline">\(n \times n\)</span> Hermitian matrices.
Recall that a fundamental question of linear algebra is about <em>to
what extent</em> do the eigenvalues of Hermitian matrices <span
class="math inline">\(X\)</span> and <span
class="math inline">\(Y\)</span> determine—and constrain—the eigenvalues
of <span class="math inline">\(X+Y\)</span>. It is clear from elementary
arguments that, for the least eigenvalue, <span
class="math inline">\(\lambda_1 (X+Y) \leq \lambda_1 (X) + \lambda_1
(Y)\)</span>. An interesting question to ask is: how can we adapt these
results to a setting with <em>random</em> matrices?</p>
<h2 id="the-spectral-theorem">The Spectral Theorem</h2>
<p>To start, we prove the spectral theorem for <em>self-adjoint
operators</em> on <em>finite-dimensional Hilbert spaces</em>.</p>
<div id="thm:spectral" class="theorem">
<p><strong>Theorem 1</strong> (Spectral theorem). Let <span
class="math inline">\(V\)</span> be a finite-dimensional, complex
Hilbert space of dimension <span class="math inline">\(n\)</span>. Let
<span class="math inline">\(T : V \to V\)</span> be a self-adjoint
operator. Then, there exists an orthonormal basis <span
class="math inline">\(v_1, \dots, v_n \in V\)</span> of <span
class="math inline">\(V\)</span>, <em>and</em> eigenvalues <span
class="math inline">\(\lambda_1, \dots, \lambda_n \in \mathbb
R\)</span>, such that <span class="math inline">\(T v_i = \lambda_i
v_i\)</span> for all <span class="math inline">\(1 \leq i \leq
n\)</span>.</p>
</div>
<div class="proof">
<p><em>Proof.</em> We prove by induction. The claim is straightforward
in <span class="math inline">\(n=0\)</span> and <span
class="math inline">\(n=1\)</span>. Suppose this is proven for some
dimension <span class="math inline">\(n-1\)</span>.</p>
<p>By compactness, we know there exists a <em>unit</em> vector <span
class="math inline">\(v \in V\)</span> such that it maximizes <span
class="math inline">\(\Re (v^* T v)\)</span>; by definition, <span
class="math inline">\(v^* v = 1\)</span>. Writing down the Lagrangian,
we immediately have that <span class="math inline">\(v\)</span> is a
critical point of <span class="math inline">\(\Re (v^* T v) - \lambda
v^* v\)</span> for some <span class="math inline">\(\lambda \in \mathbb
R\)</span>. Taking the directional derivative at any arbitrary direction
<span class="math inline">\(w \in V\)</span>, we have that <span
class="math display">\[\begin{aligned}
        \Re (v^* T w + w^* T v - \lambda v^* w - \lambda w^* v) = 0 ~,
    
\end{aligned}\]</span> so that, by self-adjointness, <span
class="math display">\[\begin{aligned}
        \Re (w^* (Tv - \lambda v)) = 0 ~.
    
\end{aligned}\]</span> <span class="math inline">\(w\)</span> is an
arbitrary direction, so <span class="math inline">\(Tv = \lambda
v\)</span>, i.e. <span class="math inline">\(v\)</span> is a unit
eigenvector of <span class="math inline">\(T\)</span>. Self-adjointness
implies that the orthogonal complement of <span
class="math inline">\(v\)</span> is preserved by <span
class="math inline">\(T\)</span>, and this is a subspace of <span
class="math inline">\(V\)</span>. Applying the induction hypothesis, we
can find an <em>orthonormal</em> basis of eigenvectors of <span
class="math inline">\(T\)</span> on the orthogonal complement. The proof
is complete after adjoining the new unit vector <span
class="math inline">\(v\)</span> to the said orthonormal basis. ◻</p>
</div>
<p>This will prove useful in our study of the eigenvalues of random
matrices.</p>
<h2 id="minimax-formulation-of-eigenvalues">Minimax Formulation of
Eigenvalues</h2>
<p>The functional <span class="math inline">\(A \mapsto \lambda_i
(A)\)</span>, which maps a Hermitian matrix <span
class="math inline">\(A\)</span> to its <span
class="math inline">\(i\)</span>th eigenvalue, is not linear, convex, or
concave (except in some select cases). However, the following result
gives us a characterization of the <span
class="math inline">\(i\)</span>th eigenvalue of a Hermitian matrix
<span class="math inline">\(A\)</span>.</p>
<div id="thm:courant-fischer-minimax" class="theorem">
<p><strong>Theorem 2</strong> (Courant-Fischer minimax formula). Let
<span class="math inline">\(A\)</span> be a Hermitian matrix. We have
<span class="math display">\begin{equation}\label{eq:courant-fischer-minimax-1}\begin{aligned}
         \lambda_i (A) &amp;=
\sup_{\dim V = i} \inf_{v : |v| = 1} v^* A v ~, \\
        \label{eq:courant-fischer-minimax-2} \lambda_i (A) &amp;=
\inf_{\dim V = n-i+1} \sup_{v : |v| = 1} v^* A v ~,
    
\end{aligned}\end{equation}</span> for all <span class="math inline">\(1 \leq i \leq
n\)</span>, where <span class="math inline">\(V\)</span> ranges over all
subspaces of <span class="math inline">\(\mathbb C^n\)</span> with the
indicated ambient dimension <span class="math inline">\(n\)</span>.</p>
</div>
<div class="proof">
<p><em>Proof.</em> It is clear that proving \eqref{eq:courant-fischer-minimax-1}
is sufficient; the other inequality follows from replacing <span
class="math inline">\(A\)</span> by <span
class="math inline">\(-A\)</span>.</p>
<p>The spectral theorem gives us the case where <span
class="math inline">\(i=1\)</span>, since we can assume <span
class="math inline">\(A\)</span> has the standard eigenbasis, in which
case <span class="math inline">\(v^* A v = \sum_{1 \leq i \leq n}
\lambda_i |v_i|^2\)</span>, whenever <span class="math inline">\(v =
(v_1, \dots, v_n) \in V\)</span>. This clearly implies the desired
result after checking that the identity <span
class="math inline">\(\lambda_1 (A) = \sup_{v \in V: |v|=1} v^* A
v\)</span> holds (which it does).</p>
<p>The general case follows from first assuming that <span
class="math inline">\(A\)</span> has the standard eigenbasis. Then,
consider the space <span class="math inline">\(V\)</span> spanned by
<span class="math inline">\(e_1, \dots, e_i\)</span>, and the inequality
<span class="math display">\[\begin{aligned}
        \lambda_i (A) \leq \sup_{\dim V = i} \inf_{v \in V : |v| = 1}
v^* A v
    
\end{aligned}\]</span> clearly follows. So, it remains to prove the
reverse inequality. To do so, note that if we write <span
class="math inline">\(W\)</span> as the space spanned by <span
class="math inline">\(e_i, e_{i+1}, \dots, e_n\)</span>, then <span
class="math inline">\(W\)</span> has codimension <span
class="math inline">\(i-1\)</span>, so it must have nontrivial
intersection with <span class="math inline">\(V\)</span>. Letting <span
class="math inline">\(v\)</span> be a unit vector in <span
class="math inline">\(V \cap W\)</span>, the result follows from the
special case where <span class="math inline">\(i=1\)</span>. ◻</p>
</div>
<h2 id="eigenvalue-inequalities">Eigenvalue Inequalities</h2>
<p>We have the <em>Weyl inequalities</em> <span class="math display">\begin{equation}\label{eq:weyl-ineq}
    \lambda_{i+j-1} (A+B) \leq \lambda_i (A) + \lambda_j (B)\end{equation}</span>
for Hermitian matrices <span class="math inline">\(A\)</span> and <span
class="math inline">\(B\)</span>, where <span class="math inline">\(i, j
\geq 1\)</span> and <span class="math inline">\(i + j - 1 \leq
n\)</span>. Simultaneously, we have the <em>Ky Fan inequality</em> <span class="math display">\begin{equation}\label{eq:ky-fan}\begin{aligned}

    \lambda_1 (A+B) + \dots + \lambda_k (A+B) \leq \lambda_1 (A) + \dots
+ \lambda_k (A) + \lambda_1 (B) + \dots + \lambda_k (B) ~.
\end{aligned}\end{equation}</span> It turns out these are not the only inequalities
available to us. We also have the <em>Lidskii inequality</em> <span
class="math display">\[\begin{aligned}
    \lambda_{i_1} (A+B) + \dots + \lambda_{i_k} (A+B) \leq \lambda_{i_1}
(A) + \dots + \lambda_{i_k} (A) + \lambda_1 (B) + \dots + \lambda_k (B)
\end{aligned}\]</span> for some set of indices <span
class="math inline">\(1 \leq i_1 &lt; \dots &lt; i_k \leq n\)</span>. We
can take this logic further, if we combine the machinery we’ve developed
with the inequality <span class="math display">\[\begin{aligned}
    |v^* A v| \leq \lVert A \rVert_{\rm op} = \max \{|\lambda_1 (A)|,
|\lambda_n (A)|\} ~,
\end{aligned}\]</span> then we have the <em>eigenvalue stability
inequality</em> <span class="math display">\[\begin{aligned}
    |\lambda_i (A+B) - \lambda_i (A)| \leq \lVert B \rVert_{\rm op} ~.
\end{aligned}\]</span> This means that the spectrum of <span
class="math inline">\(A+B\)</span> is close to that of <span
class="math inline">\(A\)</span> is <span
class="math inline">\(B\)</span> has small operator norm. In particular,
this implies that the map <span class="math inline">\(A \mapsto
\lambda_i (A)\)</span> is Lipschitz on the space of Hermitian matrices
(provided we have fixed <span class="math inline">\(i \in \{1, \dots,
n\}\)</span>).</p>
<h2 id="singular-value-decomposition">Singular Value Decomposition</h2>
<p>An equally, if not more, useful decomposition compared to eigenvalue
decomposition is captured in the following proposition.</p>
<div class="proposition">
<p><strong>Proposition 3</strong> (Existence of singular value
decomposition). Let <span class="math inline">\(0 \leq p \leq
n\)</span>, and let <span class="math inline">\(A\)</span> be a linear
transformation from <span class="math inline">\(n\)</span>-dimensional
complex Hilbert space <span class="math inline">\(U\)</span> to a <span
class="math inline">\(\mathbf P\,\,\!\!\)</span>-dimensional complex
Hilbert space <span class="math inline">\(V\)</span>. Here, <span
class="math inline">\(A\)</span> could be an <span
class="math inline">\(p \times n\)</span> matrix with complex entries,
viewed as a linear transformation from <span
class="math inline">\(\mathbb C^n \to \mathbb C^p\)</span>. Then, there
exist non-negative real numbers <span class="math inline">\(\sigma_1 (A)
\geq \dots \geq \sigma_p (A) \geq 0\)</span>, known as the <em>singular
values of <span class="math inline">\(A\)</span></em>, and orthonormal
sets <span class="math inline">\(u_1 (A), \dots, u_p (A) \in U\)</span>
and <span class="math inline">\(v_1 (A), \dots, v_p (A) \in V\)</span>,
known as <em>singular vectors of <span
class="math inline">\(A\)</span></em>, such that <span
class="math inline">\(A u_j = \sigma_j v_j\)</span> and <span
class="math inline">\(A v_j = \sigma_j u_j\)</span> for all <span
class="math inline">\(1 \leq j \leq p\)</span>. Furthermore, <span
class="math inline">\(Au = 0\)</span> whenever <span
class="math inline">\(u\)</span> is orthogonal to any (and therefore all
of) <span class="math inline">\(u_1 (A), \dots, u_p (A)\)</span>. (If
<span class="math inline">\(i &gt; p\)</span>, then <span
class="math inline">\(\sigma_i (A) = 0\)</span>.)</p>
</div>
<div class="proof">
<p><em>Proof.</em> We proceed proving this statement by induction. If
<span class="math inline">\(p=0\)</span>, then the statement is
vacuously true. Therefore, assume the statement is true for <span
class="math inline">\(p\geq 1\)</span>, and that we have already proven
this to be true for some integer <span class="math inline">\(\mathbf
P\,\,\!\!\)</span>. It remains to show the statement is true for <span
class="math inline">\(p+1\)</span>.</p>
<p>Assume <span class="math inline">\(A\)</span> is not identically
zero. The map <span class="math inline">\(u \mapsto \lVert Au
\rVert^2\)</span> is continuous on the unit sphere <span
class="math inline">\(U\)</span>, which is compact. Therefore, there
exists a unit vector <span class="math inline">\(\widetilde u\)</span>
such that it maximizes the function <span class="math inline">\(u
\mapsto \lVert Au \rVert^2\)</span>. Denote <span
class="math inline">\(\widetilde \sigma \triangleq \lVert A \widetilde u
\rVert &gt; 0\)</span>. We <u>claim</u> that <span
class="math inline">\(\widetilde u\)</span> is a critical point of the
map <span class="math inline">\(u \mapsto \lVert Au \rVert^2 -
\widetilde \sigma^2 \lVert u \rVert^2\)</span>. This follows from a
direct calculation, since the derivative of the map is given by <span
class="math inline">\(\frac{Au}{\lVert Au \rVert} - \widetilde \sigma^2
\frac{u}{\lVert u \rVert}\)</span>. Therefore, we must then have <span
class="math inline">\(A^* A \widetilde u = \widetilde \sigma^2
\widetilde u\)</span>. For convenience, define <span
class="math inline">\(\widetilde v \triangleq \frac{A\widetilde
u}{\widetilde \sigma}\)</span>. This implies that <span
class="math inline">\(A\)</span> maps the orthogonal complement of <span
class="math inline">\(\widetilde u\)</span>, denoted <span
class="math inline">\(\widetilde u^\perp\)</span>, in <span
class="math inline">\(U\)</span> to the orthogonal complement of <span
class="math inline">\(\widetilde v\)</span>, denoted <span
class="math inline">\(\widetilde v^\perp\)</span>, in <span
class="math inline">\(V\)</span>.</p>
<p>On the restriction of <span class="math inline">\(A\)</span> to <span
class="math inline">\(\widetilde u^\perp\)</span> and <span
class="math inline">\(\widetilde v^\perp\)</span>, we appeal to the
induction hypothesis to conclude that there exists a singular value
decomposition, with singular values <span class="math inline">\(\sigma_2
\geq \dots \geq \sigma_p \geq 0\)</span> and singular vectors <span
class="math inline">\(u_2, \dots, u_p \in \widetilde u^\perp\)</span>
(and <span class="math inline">\(v_2, \dots, v_p \in \widetilde
v^\perp\)</span>) with the properties stated in the proposition. By
definition (and construction), we see that <span
class="math inline">\(\sigma_2, \dots, \sigma_p\)</span> are less than
or equal to <span class="math inline">\(\widetilde \sigma\)</span>.
Appending <span class="math inline">\(\widetilde \sigma\)</span>, <span
class="math inline">\(\widetilde u\)</span>, and <span
class="math inline">\(\widetilde v\)</span> to the singular values and
singular vectors from above gives the desired conclusion to the
induction step. ◻</p>
</div>
<h2 id="statistics-of-random-matrices">Statistics of Random
Matrices</h2>
<p>One of the most useful statistics to look at is the <em>operator
norm</em> of a random matrix. To make this concrete, let <span
class="math inline">\(M\)</span> be an element of a random matrix
ensemble. Then, the operator norm is defined as <span
class="math display">\[\begin{aligned}
    \lVert M \rVert_{\rm op} \triangleq \sup_{x \in \mathbb C^d : |x| =
1} |Mx| ~.
\end{aligned}\]</span> It might be tempting to bound this random
quantity directly, in the sense of using the union bound to obtain a
result of the form <span class="math inline">\(\mathbf P\,\,\!\!(\lVert
Mx \rVert_{\rm op} &gt; \lambda) \leq \mathbf P\,\,\!\!(\bigvee_{x \in
\mathbb S^d} |Mx| &gt; \lambda)\)</span>, where <span
class="math inline">\(\mathbb S^d \triangleq \{x \in \mathbb C^d : |x| =
1\}\)</span>. But this is not quite right, because <span
class="math inline">\(\mathbb S^d\)</span> is uncountable. However, we
can proceed to prove a result of this kind in two steps.</p>
<div id="lem:prelim-uniformly-bounded-subgassian-rm" class="lemma">
<p><strong>Lemma 4</strong>. Let <span class="math inline">\(M =
(\xi_{ij})_{1 \leq i,j \leq d}\)</span>, where <span
class="math inline">\(\xi_{ij}\)</span> are independent random variables
with <span class="math inline">\(\mathbb E \xi_{ij} = 0\)</span> for all
<span class="math inline">\(i,j\)</span>. Furthermore, <span
class="math inline">\(\xi_{ij}\)</span> is uniformly bounded by <span
class="math inline">\(1\)</span> for all <span
class="math inline">\(i,j\)</span>. Let <span class="math inline">\(x
\in \mathbb C^d\)</span>. For sufficiently large universal constant
<span class="math inline">\(A\)</span>, we have <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(|Mx| &gt; A\sqrt{d}) \leq C \exp(-cAd)
    
\end{aligned}\]</span> for some absolute constants <span
class="math inline">\(c,C &gt; 0\)</span>.</p>
</div>
<div class="proof">
<p><em>Proof.</em> By examining the <span
class="math inline">\(n\)</span> rows of <span
class="math inline">\(M\)</span>, denoted <span
class="math inline">\(X_1, \dots, X_d\)</span>, we investigate <span
class="math inline">\(X_i \cdot x\)</span> for all <span
class="math inline">\(1 \leq i \leq d\)</span>. Note that because <span
class="math inline">\(\xi_{ij}\)</span> is uniformly bounded, it follows
that <span class="math inline">\(X_i \cdot x\)</span> is uniformly
subgaussian, so there exists some absolute constants <span
class="math inline">\(\breve c, \breve C &gt; 0\)</span> such that <span
class="math inline">\(\mathbf P\,\,\!\!(|X_i \cdot x| &gt; \lambda) \leq
\breve C \exp(-\breve c \lambda^2)\)</span>. Subgaussianity implies that
<span class="math inline">\(\mathbb E e^{\breve c |X_i \cdot x|^2} \leq
\breve C &lt; \infty\)</span>, which further implies <span
class="math inline">\(\mathbb E e^{\breve c |Mx|^2} \leq \breve
C^d\)</span>, as desired. ◻</p>
</div>
<div id="lem:prelim-eps-net-bigvee-bound" class="lemma">
<p><strong>Lemma 5</strong>. Let <span
class="math inline">\(\Sigma\)</span> be a maximal <span
class="math inline">\(\frac12\)</span>-net of <span
class="math inline">\(\mathbb S^d\)</span>. For any <span
class="math inline">\(d \times d\)</span> random matrix <span
class="math inline">\(M\)</span> with complex coefficients and any <span
class="math inline">\(\lambda &gt; 0\)</span>, we have <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(\lVert Mx \rVert_{\rm op} &gt; \lambda) \leq
\mathbf P\,\,\!\!\left( \bigvee_{z \in \mathbb S^d} |Mz| &gt;
\frac{\lambda}{2} \right) ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> By compactness of <span class="math inline">\(\mathbb
S^d\)</span>, we find some <span class="math inline">\(x \in \mathbb
S^d\)</span> such that <span class="math inline">\(|Mx| = \lVert M
\rVert_{\rm op}\)</span>. Furthermore, by construction, <span
class="math inline">\(|x-y| &lt; \frac12\)</span> for all <span
class="math inline">\(y \in \Sigma\)</span>; if not, we immediately
obtain a contradiction with the maximality of <span
class="math inline">\(\Sigma\)</span>. Therefore, <span
class="math inline">\(|M(x-y)| \leq \frac{\lVert M \rVert_{\rm
op}}{2}\)</span>. By the (reverse) triangle inequality, we have <span
class="math inline">\(|Mx| \geq \frac{\lVert M \rVert_{\rm
op}}{2}\)</span>. Therefore, if <span class="math inline">\(\lVert M
\rVert_{\rm op} &gt; \lambda\)</span> for some <span
class="math inline">\(\lambda &gt; 0\)</span>, it then follows that
<span class="math inline">\(\frac{|My|}{2} &gt;
\frac{\lambda}{2}\)</span> for some <span class="math inline">\(y \in
\Sigma\)</span>. This concludes the proof. ◻</p>
</div>
<div class="remark">
<p><strong>Remark 6</strong>. Clearly, <span
class="math inline">\(\Sigma\)</span> as defined in Lemma <a
href="#lem:prelim-eps-net-bigvee-bound" data-reference-type="ref"
data-reference="lem:prelim-eps-net-bigvee-bound">5</a> is a countable,
dense subset of <span class="math inline">\(\mathbb S^d\)</span>, so we
can appeal to it to obtain a desired bound on <span
class="math inline">\(\mathbf P\,\,\!\!(\lVert M \rVert_{\rm op} &gt;
\lambda)\)</span>. Namely, observe that because <span
class="math inline">\(|\Sigma| \leq \left( \frac{C}{\varepsilon}
\right)^d\)</span> for some absolute constant <span
class="math inline">\(C&gt;0\)</span>, we can combine Lemma <a
href="#lem:prelim-uniformly-bounded-subgassian-rm"
data-reference-type="ref"
data-reference="lem:prelim-uniformly-bounded-subgassian-rm">4</a> and
Lemma <a href="#lem:prelim-eps-net-bigvee-bound"
data-reference-type="ref"
data-reference="lem:prelim-eps-net-bigvee-bound">5</a> to obtain the
result that <span class="math inline">\(\mathbf P\,\,\!\!( \lVert M
\rVert_{\rm op} &gt; A \sqrt{d}) \leq C \exp(-cAd)\)</span>, i.e. <span
class="math inline">\(\lVert M \rVert_{\rm op} = O(\sqrt{d})\)</span>
with high probability. This gives us the desired conclusion <em>while
circumventing</em> the problem that <span class="math inline">\(\mathbb
S^d\)</span> is uncountable.</p>
</div>
<div id="rem:moment-trick" class="example">
<p><strong>Example 7</strong> (The moment trick). For a <span
class="math inline">\(n \times n\)</span> Hermitian matrix <span
class="math inline">\(M\)</span>, <span
class="math inline">\(\operatorname{Tr}(M) = \sum_{1 \leq i \leq n}
\xi_{ii}\)</span>, where <span class="math inline">\(\xi_{ij}\)</span>
have mean zero and unit variance, with <span
class="math inline">\(\xi_{ij}\)</span> uniformly bounded by <span
class="math inline">\(K\)</span> (can pick <span
class="math inline">\(K=1\)</span> for simplicity, but we will choose a
particular <span class="math inline">\(K\)</span> that scales with <span
class="math inline">\(n\)</span> below). More generally, because <span
class="math inline">\(\operatorname{Tr}(M^k) = \sum_{1 \leq i \leq n}
\xi_{ii}^k\)</span> for all <span class="math inline">\(k\)</span>, we
can look at a number of expansions of the trace for varying values of
<span class="math inline">\(k\)</span>. As an example, we can look at
the fourth moment: <span class="math display">\[\begin{aligned}
        \operatorname{Tr}(M^4) = \sum_{1 \leq i \leq n} \xi_{ii}^4 =
\sum_{1 \leq i,j,k,\ell \leq n} \xi_{ij} \xi_{jk} \xi_{k\ell} \xi_{\ell
i} ~.
    
\end{aligned}\]</span> Taking expectations, expanding, and simplifying
using <span class="math inline">\(\mathbb E \xi_{ij} = 0\)</span> for
all <span class="math inline">\(i,j\)</span>, we have <span
class="math display">\[\begin{aligned}
        \mathbb E\operatorname{Tr}(M^4) = \mathbb E \sum_{1 \leq
i,j,k,\ell \leq n} \xi_{ij} \xi_{jk} \xi_{k\ell} \xi_{\ell i}
    
\end{aligned}\]</span> of which a lot of terms reduce to zeros. A
taxonomy of all possible cases is:</p>
<ol>
<li><p><span class="math inline">\((i,j), (j,k), (k,\ell),
(\ell,i)\)</span> are all distinct, in which case by independence <span
class="math inline">\(\mathbb E\operatorname{Tr}(M^4) =
0\)</span>;</p></li>
<li><p>Any two of <span class="math inline">\((i,j), (j,k), (k,\ell),
(\ell,i)\)</span> are distinct, in which case by independence <span
class="math inline">\(\mathbb E\operatorname{Tr}(M^4) =
0\)</span>;</p></li>
<li><ol>
<li><p><span class="math inline">\(i=k\)</span>, but <span
class="math inline">\(j \neq \ell\)</span> and <span
class="math inline">\(j,\ell \neq i\)</span>: there are no cancellations
possible to <span class="math inline">\(\mathbb E\operatorname{Tr}(M^4)
= 0\)</span>, and there are <span class="math inline">\(O(n^3)\)</span>
of such terms (because there is only one “degree of freedom”);</p></li>
<li><p><span class="math inline">\(i=k\)</span>, <span
class="math inline">\(j=\ell\)</span>: there are no cancellations
possible to <span class="math inline">\(\mathbb E\operatorname{Tr}(M^4)
= 0\)</span>, and there are <span class="math inline">\(O(n^2
K^2)\)</span> of such terms (because there are two “degrees of
freedom”);</p></li>
<li><p><span class="math inline">\(i=j=k\)</span>, but <span
class="math inline">\(\ell \neq i\)</span>: there are no cancellations
possible to <span class="math inline">\(\mathbb E\operatorname{Tr}(M^4)
= 0\)</span>, and there are <span class="math inline">\(O(n^2
K^2)\)</span> of such terms (because there are two “degrees of
freedom”);</p></li>
<li><p><span class="math inline">\(i=j=k=\ell\)</span>: there are no
cancellations possible to <span class="math inline">\(\mathbb
E\operatorname{Tr}(M^4) = 0\)</span>, and there are <span
class="math inline">\(O(n K^3)\)</span> of such terms (because there are
three “degrees of freedom”).</p></li>
</ol></li>
</ol>
<p>These enumerations give us the conclusion that, if <span
class="math inline">\(K = O(\sqrt{n})\)</span>, then <span
class="math inline">\(\mathbb E \operatorname{Tr}(M^4) \leq
O(n^3)\)</span>. Markov’s inequality thus implies <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!( \operatorname{Tr}(M^4) &gt; 1-\varepsilon )
\leq O \left( \frac{n^3}{1-\varepsilon} \right) ~.
    
\end{aligned}\]</span> We thus have the crude upper bound <span
class="math inline">\(\lVert M \rVert_{\rm op} \leq O (
n^{\frac34}/(1-\varepsilon) )\)</span> with probability at least <span
class="math inline">\(1-\varepsilon\)</span>. This bound is surely
suboptimal (Tracy-Widom’s law gives a bound on the order of <span
class="math inline">\(n^{\frac16}\)</span>), but is certainly helpful
enough in establishing desired lower bounds for, e.g. universality
results.</p>
</div>
<h2 id="universality">Universality</h2>
<p>The main purpose of this section is to cap off this collection of
notes with a major <em>universality</em> result. Morally, this is a
result where we know a sequence of random elements converges in law
almost surely, but one in which the features of the distribution of
individual components are irrelevant for the limiting behaviour. The
following result is most striking, and is called the <em>semicircular
law</em>. We work with the <em>Wigner Hermitian ensemble</em>, i.e.
<span class="math inline">\(M_n = (\xi_{ij})_{1 \leq i,j \leq
n}\)</span>, and examine the scaled <span
class="math inline">\(\frac{1}{\sqrt{n}} M_n\)</span>. Because <span
class="math inline">\(M_n\)</span> is Hermitian, the <em>empirical
spectral distribution</em> <span class="math display">\[\begin{aligned}
    \mu_{\frac{1}{\sqrt{n}} M_n} \triangleq \frac1n \sum_{1 \leq i \leq
n} \delta_{\frac{1}{\sqrt{n}} \lambda_i (M_n)}
\end{aligned}\]</span> is well-defined. Via Riesz representation, we can
look at the expectation via duality: <span
class="math display">\[\begin{aligned}
    \mathbb E_{\mu_{\frac{1}{\sqrt{n}} M_n}} \in \mathcal{P} (\mathbb R)
~,~ \text{i.e. } \int_{\mathbb R} \varphi \mathrm{d} \mathbb
E_{\mu_{\frac{1}{\sqrt{n}} M_n}} \triangleq \mathbb E \int_{\mathbb R}
\varphi \mathrm{d} \mu_{\frac{1}{\sqrt{n}} M_n}
\end{aligned}\]</span> for all bump functions <span
class="math inline">\(\varphi\)</span>. Note that this is the law of the
<em>random</em> eigenvalues <span
class="math inline">\(\frac{1}{\sqrt{n}} \lambda_i (M_n)\)</span>. We
are now ready to state the main result.</p>
<div id="thm:semicircular-law" class="theorem">
<p><strong>Theorem 8</strong> (Semicircular law). Let <span
class="math inline">\(M_n\)</span> be the (top) principal minor of the
infinite Wigner matrix <span class="math inline">\((\xi_{ij})\)</span>.
The empirical spectral distribution converges in law to the
<em>semicircular law</em> <span class="math inline">\(\mu_{\rm
sc}\)</span>, defined as <span class="math display">\[\begin{aligned}
        \mu_{\rm sc} \triangleq \frac{1}{2\pi} (4-x^2)^{\frac12}_+ \mathrm{d}
x ~,
    
\end{aligned}\]</span> almost surely.</p>
</div>
<p>The proof of Theorem <a href="#thm:semicircular-law"
data-reference-type="ref" data-reference="thm:semicircular-law">8</a> is
a bit gargantuan, but can be simplified with the help of a number of
observations.</p>
<div class="remark">
<p><strong>Remark 9</strong> (Simplification I). The Cauchy interlacing
theorem (for eigenvalues) directly implies <span
class="math display">\[\begin{aligned}
        \frac{n}{m}
\mu_{\frac{1}{\sqrt n} M_n} \left( -\infty, \frac{\lambda}{\sqrt n}
\right) - \frac{n-m}{m} \leq \mu_{\frac{1}{\sqrt m} M_m} \left( -\infty,
\frac{\lambda}{\sqrt m} \right) \leq \frac{n}{m} \mu_{\frac{1}{\sqrt n}
M_n} \left( -\infty, \frac{\lambda}{\sqrt n} \right)
    
\end{aligned}\]</span> for any <span class="math inline">\(n &gt; m &gt;
0\)</span> and any <span class="math inline">\(\lambda &gt; 0\)</span>.
Therefore, it is clear that to show the semicircular law holds, we just
need to prove it is true for any <em>lacunary sequence</em> of <span
class="math inline">\(n\)</span>, i.e. <span class="math inline">\(n_1,
n_2, \dots\)</span> such that <span
class="math inline">\(\frac{n_{j+1}}{n_j} \geq c\)</span> for all <span
class="math inline">\(j\)</span> and some constant <span
class="math inline">\(c &gt; 1\)</span>. To see this, fix any <span
class="math inline">\(\varepsilon &gt; 0\)</span> and set <span
class="math inline">\(n_j = \lfloor (1+\varepsilon)^j \rfloor\)</span>.
For <span class="math inline">\(n \in [n_{j-1}, n_j)\)</span>, we have
<span class="math display">\[\begin{aligned}
        \mu_{\frac{1}{\sqrt n} M_n} \left( -\infty, \frac{\lambda}{\sqrt
n} \right) &amp;\leq \frac{n_j}{n} \mu_{\frac{1}{\sqrt n_j} M_{n_j}}
\left( -\infty, \frac{\lambda}{\sqrt n_j} \right) ~, \\
        \mu_{\frac{1}{\sqrt n} M_n} \left( -\infty, \frac{\lambda}{\sqrt
n} \right) &amp;\geq \frac{n_j}{n} \mu_{\frac{1}{\sqrt n_j} M_{n_j}}
\left( -\infty, \frac{\lambda}{\sqrt n_j} \right) - \frac{n_j - n}{n} ~.
    
\end{aligned}\]</span> We can now rescale <span
class="math inline">\(\lambda\)</span>, and replace it by <span
class="math inline">\(\sqrt{n}\lambda\)</span>. Sending <span
class="math inline">\(j \to \infty\)</span> (so as to let <span
class="math inline">\(n \to \infty\)</span>), we have <span
class="math display">\[\begin{aligned}
        \mu_{\rm sc} \left( -\infty, \min \left\{ \lambda,
\frac{\lambda}{\sqrt{1+\varepsilon}} \right\} \right) &amp;\leq
\liminf_{n \to \infty} \mu_{\frac{1}{\sqrt n} M_n} \left( -\infty,
\lambda \right) ~, \\
        \mu_{\rm sc} \left( -\infty, \max \left\{ \lambda,
\frac{\lambda}{\sqrt{1+\varepsilon}} \right\} \right) &amp;\geq
\frac{1}{1+\varepsilon} \limsup_{n \to \infty} \mu_{\frac{1}{\sqrt n}
M_n} \left( -\infty, \lambda \right) ~.
    
\end{aligned}\]</span> Sending <span class="math inline">\(\varepsilon
\to 0\)</span> gives the desired result, once we’ve proven the statement
is true for any lacunary sequence of <span
class="math inline">\(n\)</span>.</p>
</div>
<div class="remark">
<p><strong>Remark 10</strong> (Simplification II). For any Hermitian
matrix <span class="math inline">\(A\)</span> and <span
class="math inline">\(B\)</span>, the Weidlandt-Hoffman inequality
states that <span class="math display">\[\begin{aligned}
        \sum_{1 \leq i \leq n} |\lambda_i (A+B) - \lambda_i (A)|^2 \leq
\lVert B \rVert_F ~,
    
\end{aligned}\]</span> where <span class="math inline">\(\lVert B
\rVert_F\)</span> is the Frobenius norm. We can easily upgrade this
statement. If <span class="math inline">\(\lambda \in \mathbb R\)</span>
and <span class="math inline">\(\varepsilon &gt; 0\)</span>, we have
<span class="math display">\[\begin{aligned}
        \mu_{\frac{1}{\sqrt n} (A+B)} (-\infty, \lambda) &amp;\leq
\mu_{\frac{1}{\sqrt n} A} (-\infty, \lambda+\varepsilon) + \left(
\frac{1}{\varepsilon n} \right)^2 \lVert B \rVert_F^2 ~, \\
        \mu_{\frac{1}{\sqrt n} (A+B)} (-\infty, \lambda) &amp;\geq
\mu_{\frac{1}{\sqrt n} A} (-\infty, \lambda-\varepsilon) - \left(
\frac{1}{\varepsilon n} \right)^2 \lVert B \rVert_F^2 ~.
    
\end{aligned}\]</span> The desired conclusion follows from a
straightforward argument: observe that if <span
class="math inline">\(\lambda_i (A+B)\)</span> is the largest eigenvalue
of <span class="math inline">\(A+B\)</span> less than <span
class="math inline">\(\frac{\lambda}{\sqrt{n}}\)</span>, and <span
class="math inline">\(\lambda_j (A)\)</span> is the largest eigenvalue
of <span class="math inline">\(A\)</span> less than <span
class="math inline">\((\lambda+\varepsilon)\sqrt{n}\)</span>, we must
then show <span class="math inline">\(i \leq j + \frac{1}{\varepsilon^2
n} \lVert B \rVert_F^2\)</span>. If <span class="math inline">\(i \leq
j\)</span>, then there is nothing to show. If not, then <span
class="math inline">\(i - j &gt; 0\)</span>; in particular, the
Weidlandt-Hoffman inequality states that we must have <span
class="math display">\[\begin{aligned}
        |\lambda_k (A+B) - \lambda_k (A)| \geq \varepsilon \sqrt{n} ~,~
\text{for all } j &lt; k \leq i ~.
    
\end{aligned}\]</span> Summing this inequality across all <span
class="math inline">\(k\)</span>, we have <span
class="math display">\[\begin{aligned}
        \sum_{1 \leq k \leq n} |\lambda_k (A+B) - \lambda_k (A)|^2 \geq
\varepsilon^2 n (i-j) ~.
    
\end{aligned}\]</span> Applying the Weidlandt-Hoffman inequality again,
we have <span class="math display">\[\begin{aligned}
        \lVert B \rVert_F \geq \sum_{1 \leq k \leq n} |\lambda_k (A+B) -
\lambda_k (A)|^2 \geq \varepsilon^2 n (i-j) ~,
    
\end{aligned}\]</span> from which the desired conclusion follows.</p>
</div>
<div class="proof">
<p><em>Proof of Theorem <a href="#thm:semicircular-law"
data-reference-type="ref" data-reference="thm:semicircular-law">8</a>,
via the method of moments.</em> Note that <span
class="math display">\[\begin{aligned}
        \int_{\mathbb R} x^k \mathrm{d} \mu_{\frac{1}{\sqrt{n}} M_n} (x) =
\frac1n \operatorname{Tr} \left( \frac{1}{\sqrt{n}} M_n \right)^k ~.
    
\end{aligned}\]</span> Duality then implies <span class="math display">\begin{equation}\label{eq:duality-formula-sc}\begin{aligned}

        \int_{\mathbb R} x^k \mathrm{d} \mathbb E \mu_{\frac{1}{\sqrt{n}} M_n}
(x) = \frac1n \mathbb E \operatorname{Tr} \left( \frac{1}{\sqrt{n}} M_n
\right)^k ~.
    
\end{aligned}\end{equation}</span> By forgone discussions, <span
class="math inline">\(\mathrm{d} \mathbb E \mu_{\frac{1}{\sqrt{n}}
M_n}\)</span> is uniformly subgaussian.</p>
<ol>
<li><p>\eqref{eq:duality-formula-sc}
implies that it is sufficient to look at the parity of <span
class="math inline">\(k\)</span>. In particular, if <span
class="math inline">\(k\)</span> is odd, then there is <em>no</em>
non-crossing cycles of odd length, therefore <span
class="math display">\[\begin{aligned}
            \frac1n \mathbb E \operatorname{Tr} \left(
\frac{1}{\sqrt{n}} M_n \right)^k = O ((kn)^{-1}) ~.
        
\end{aligned}\]</span> If <span class="math inline">\(k\)</span> is
even, then there are <span
class="math inline">\(\binom{n}{n-\frac{k}{2}} \binom{k}{\frac{k}{2}}
\frac{1}{\frac{k}{2}+1}\)</span> non-crossing cycles. Let <span
class="math inline">\(C_{\frac{k}{2}} \triangleq \frac{1}{\frac{k}{2}+1}
\binom{k}{\frac{k}{2}}\)</span>, we conclude that <span
class="math inline">\(\frac1n \mathbb E \operatorname{Tr} \left(
\frac{1}{\sqrt{n}} M_n \right)^k\)</span> is dominated by <span
class="math inline">\(C_{\frac{k}{2}}
n(n-1)\dots(n-\frac{k}{2})\)</span>. Furthermore, if a cycle has <span
class="math inline">\(j\)</span> edges for <span class="math inline">\(j
&lt; \frac{k}{2}\)</span>, then the bound above simplifies to <span
class="math inline">\(n^{j+1} K^{k-2j} \lesssim n^{j+1}\)</span>.
Because there are at most <span class="math inline">\(k\)</span> such
cases, <span class="math display">\[\begin{aligned}
            \frac1n \mathbb E \operatorname{Tr} \left(
\frac{1}{\sqrt{n}} M_n \right)^k = C_{\frac{k}{2}} + O ((kn)^{-1})
        
\end{aligned}\]</span> if <span class="math inline">\(k\)</span> is
even.</p></li>
<li><p>But we can morally describe <span class="math inline">\(\frac1n
\mathbb E \operatorname{Tr} \left( \frac{1}{\sqrt{n}} M_n
\right)^k\)</span> better for even <span
class="math inline">\(k\)</span>. Let <span
class="math inline">\(m_k^{(n)} \triangleq \int_{\mathbb R} x^k \mathrm{d}
\mu_{\frac{1}{\sqrt{n}} M_n} (x)\)</span>, and fix <span
class="math inline">\(\varepsilon &gt; 0\)</span>. By Markov’s
inequality and Cauchy-Schwarz, we have <span
class="math display">\[\begin{aligned}
            \mathbf P\,\,\!\!(|m_k^{(n)} -
C_{\frac{k}{2}}|&gt;\varepsilon) &amp;\leq \frac{\mathbb E[m_k^{(n)} -
C_{\frac{k}{2}}]^2}{\varepsilon^2} \\
            &amp;\leq \frac{2}{\varepsilon^2} \left(
\mathop{\mathrm{Var}}(m_k^{(n)}) + [\mathbb E[m_k^{(n)} -
C_{\frac{k}{2}}]]^2 \right) ~.
        
\end{aligned}\]</span> By foregone arguments, we have <span
class="math inline">\(\mathbb E[m_k^{(n)} - C_{\frac{k}{2}}] \leq
O((kn)^{-1})\)</span>, so <span class="math inline">\(\mathbf
P\,\,\!\!(|\mathbb E[m_k^{(n)} - C_{\frac{k}{2}}]|&gt;\varepsilon)
\lesssim_k \frac1n\)</span>. Therefore, along any lacunary sequence of
<span class="math inline">\(n\)</span>, we have <span
class="math display">\[\begin{aligned}
            \mathbf P\,\,\!\!(|\mathbb E[m_k^{(n_j)} -
C_{\frac{k}{2}}]|&gt;\varepsilon) \lesssim_k \frac{1}{n_j} ~,
        
\end{aligned}\]</span> and, by Borel-Cantelli, we have <span
class="math display">\[\begin{aligned}
            |m_k^{(n_j)} - C_{\frac{k}{2}}| &lt; \varepsilon ~\text{a.s.
for large enough } j ~.
        
\end{aligned}\]</span></p></li>
<li><p>By direct calculations, <span
class="math display">\[\begin{aligned}
            \int_{\mathbb R} x^k \mathrm{d} \mu_{\rm sc} (x) = \begin{cases}
                0 &amp; \text{if } k \in 2\mathbb N + 1 ~, \\
                C_{\frac{k}{2}} &amp; \text{if } k \in 2\mathbb N ~.
            \end{cases}
        
\end{aligned}\]</span> Therefore, it remains to verify that <span
class="math inline">\(\int_{\mathbb R} x^k \mathrm{d} \mu_{\frac{1}{\sqrt{n}}
M_n} (x)\)</span> converges almost surely to <span
class="math inline">\(C_{\frac{k}{2}}\)</span> for even <span
class="math inline">\(k\)</span>.</p>
<p>Via direct calculations again, we have <span
class="math display">\[\begin{aligned}
            \int_{\mathbb R} x^k \mathrm{d} \mu_{\rm sc} (x) &amp;=
\frac{1}{2\pi} \int_{-2}^{2} x^k \sqrt{4-x^2} \mathrm{d} x = \frac{1}{\pi}
\int_0^2 x^k \sqrt{4-x^2} \mathrm{d} x \\
            &amp;= \frac{1}{\pi} \int_0^{\frac{\pi}{2}} 2^{k+1} \cos^k
\theta \sin^2 \theta \mathrm{d} \theta \\
            &amp;= \frac{2^{\frac{k}{2}+1}}{\pi} \int_0^1
y^{\frac{k}{2}-\frac12} (1-y)^{\frac12} \mathrm{d} y \\
            &amp;= \frac{2^{\frac{k}{2}+1}}{\pi} \operatorname{Beta}
\left(\frac{k}{2}+\frac12, \frac32\right) = C_{\frac{k}{2}} ~,
        
\end{aligned}\]</span> as desired.</p></li>
</ol>
<p>This concludes the proof. ◻</p>
</div>
<div class="proof">
<p><em>Proof of Theorem <a href="#thm:semicircular-law"
data-reference-type="ref" data-reference="thm:semicircular-law">8</a>,
via Stieltjes transform.</em> For all probability measure <span
class="math inline">\(\mu\)</span> on <span
class="math inline">\(\mathbb R\)</span>, the <em>Stieltjes
transform</em> is defined as <span
class="math display">\[\begin{aligned}
        s_\mu (z) = \int_{\mathbb R} \frac{1}{x-z} \mathrm{d} \mu(x) \qquad
\text{for all } z \notin \operatorname{spt} (\mu) ~.
    
\end{aligned}\]</span> Let <span class="math inline">\(s_n (z)
\triangleq s_{\mu_{\frac{1}{\sqrt{n}} M_n}} (z)\)</span>, i.e. <span
class="math display">\[\begin{aligned}
        s_n (z) = \frac{1}{n} \sum_{1 \leq i \leq n} \frac{1}{\lambda_i
(\frac{1}{\sqrt{n}} M_n) - z} = \frac1n \operatorname{Tr} \left(
\frac{1}{\sqrt{n}} M_n - zI \right)^{-1} ~.
    
\end{aligned}\]</span> It is not difficult to verify that <span
class="math inline">\(s_n (\overline z) = \overline{s_n(z)}\)</span>, so
that it suffices to study <span class="math inline">\(s_n (z)\)</span>
on <span class="math inline">\(\mathbb U = \{ z \in \mathbb C : \Im z
&gt; 0 \}\)</span>. It is also clear that <span
class="math inline">\(\Im (z) &gt; 0\)</span> implies <span
class="math inline">\(\Im (s_n(z)) &gt; 0\)</span>, because <span
class="math display">\[\begin{aligned}
        \Im \left( \frac{1}{x-z} \right) &amp;= \Im \left(
\frac{1}{x-(a+bi)} \right) = \Im \left(
\frac{x-(a-bi)}{(x-(a+bi))(x-(a-bi))} \right) \\
        &amp;= \Im \left( \frac{(x+a) + bi}{(x-a)^2 + b^2} \right) &gt;
0
    
\end{aligned}\]</span> if <span class="math inline">\(b &gt; 0\)</span>.
Furthermore, let <span class="math inline">\(P_b (x) = \frac{1}{\pi}
\frac{b}{x^2 + b^2}\)</span> denote the Poisson kernel; then, <span
class="math inline">\(\Im (s_\mu (z)) = \pi\mu \ast P_b (a)\)</span>. It
then follows that <span class="math inline">\(\Im (s_\mu(\cdot + bi))
\to \pi \mu(\cdot)\)</span> as <span class="math inline">\(b \to
0^+\)</span>, in the weak-<span class="math inline">\(\star\)</span>
topology. The final fact that is useful going forward is captured in
Lemma <a href="#lem:stieltjes-cvg-pointwise" data-reference-type="ref"
data-reference="lem:stieltjes-cvg-pointwise">11</a>.</p>
<p>The major argument that we need in the actual proof is the idea of
<em>predecessor comparison</em>: namely, that we compare the Stieltjes
transform <span class="math inline">\(s_n (z)\)</span> to that of the
<span class="math inline">\((n-1)\times(n-1)\)</span> principal minor,
denoted <span class="math inline">\(s_{n-1} (z)\)</span>. Let <span
class="math inline">\(M_{n-1}\)</span> denote the <span
class="math inline">\((n-1)\times(n-1)\)</span> principal minor of <span
class="math inline">\(M_n\)</span>. Since it suffices to look at <span
class="math inline">\(\mathbb U\)</span>, we can simply study the
“alternating signs” <span class="math display">\begin{equation}\label{eq:alternating-sign-sum}\begin{aligned}

        \sum_{1 \leq i \leq n-1} \frac{b}{\left(\frac{1}{\sqrt{n}}
\lambda_i (M_{n-1}) - a\right)^2 + b^2} -
        \sum_{1 \leq i \leq n} \frac{b}{\left(\frac{1}{\sqrt{n}}
\lambda_i (M_n) - a\right)^2 + b^2} ~.
    
\end{aligned}\end{equation}</span> Notice that <span class="math inline">\(x \mapsto
\frac{b}{(x-a)^2+b^2}\)</span> is of bounded variation, so \eqref{eq:alternating-sign-sum}
is never “large”. These arguments show that <span
class="math display">\[\begin{aligned}
        \left\{ \frac{\lambda_1(M_n)}{\sqrt{n}},
\frac{\lambda_1(M_{n-1})}{\sqrt{n}}, \dots, \frac{\lambda_{n-1}
(M_n)}{\sqrt{n}}, \frac{\lambda_{n-1} (M_{n-1})}{\sqrt{n}},
\frac{\lambda_n (M_n)}{\sqrt{n}} \right\}
    
\end{aligned}\]</span> partitions the spectrum of <span
class="math inline">\(M_n\)</span>. The rest of the argument relies on
the following <u>claim</u>: \eqref{eq:alternating-sign-sum}
is the <em>imaginary part</em> of <span
class="math inline">\(\sqrt{n(n-1)} s_{n-1} \left( \sqrt{\frac{n}{n-1}}
(a+bi) - n s_n (a+bi) \right)\)</span>. To see this, note that <span
class="math display">\[\begin{aligned}
        &amp;\quad \sqrt{n(n-1)} s_{n-1} \left( \sqrt{\frac{n}{n-1}}
(a+bi) \right) \\
        &amp;= \frac{\sqrt{n(n-1)}}{n-1} \sum_{1 \leq i \leq n-1} \left(
\lambda_i \left( \frac{M_{n-1}}{\sqrt{n-1}} \right) -
\sqrt{\frac{n}{n-1}} (a+bi) \right)^{-1} \\
        &amp;= \sum_{1 \leq i \leq n} \left( \frac{\lambda_i
(M_n)}{\sqrt{n}} - (a+bi) \right)^{-1} ~,
    
\end{aligned}\]</span> and <span class="math display">\[\begin{aligned}
        n s_n (a+bi) = \frac{n}{n-1} \sum_{1 \leq i \leq n} \left(
\lambda_i \left( \frac{M_n}{\sqrt{n}} \right) - (a+bi) \right)^{-1} ~,
    
\end{aligned}\]</span> and taking the difference, then taking the
imaginary part, gives \eqref{eq:alternating-sign-sum}.
In particular, \eqref{eq:alternating-sign-sum}
is <span class="math inline">\(O(1)\)</span> as <span
class="math inline">\(n\to\infty\)</span> from an application of
Cauchy’s interlacing theorem. Therefore, the smoothness of the Stieltjes
transform, and the fact that <span
class="math inline">\(\sqrt{\frac{n}{n-1}} - 1 = O(\frac1n)\)</span>,
implies that <span class="math display">\[\begin{aligned}
        s_n (z) = s_{n-1} (z) + O (n^{-1}) \:\:\:\: \text{on} \:\:
\mathbb U ~.
    
\end{aligned}\]</span> Furthermore, notice that the relation above shows
the addition of the <span class="math inline">\(n\)</span>th row has no
effect, except through the error term; <span
class="math inline">\(s_{n-1} (z)\)</span> depends on <span
class="math inline">\(M_{n-1}\)</span>, and does not depend on the <span
class="math inline">\(n\)</span>th row of <span
class="math inline">\(M_n\)</span>! With this, we can look at the
Stieltjes transform of <span class="math inline">\(M_n\)</span> (and
permutations of the rows of <span
class="math inline">\(M_n\)</span>).</p>
<p>Because the elements of the upper triangular part of <span
class="math inline">\(M_n\)</span> are jointly independent, applying
McDiarmid’s inequality (Lemma <a href="{% post_url 2026-06-15-fundamental-techniques %}#lem:mcdiarmid"
data-reference-type="ref"
data-reference="lem:mcdiarmid">[lem:mcdiarmid]</a>) gives <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left(\left|s_n (z) - \mathbb E s_n (z)\right|
&gt; \frac{\lambda}{\sqrt{n}}\right) \leq C e^{-c\lambda^2}
    
\end{aligned}\]</span> for some absolute constants <span
class="math inline">\(c, C &gt; 0\)</span>. Picking <span
class="math inline">\(\lambda = n^\frac13\)</span>, we have, by
Borel-Cantelli, <span class="math display">\[\begin{aligned}
        |s_n (z) - \mathbb E s_n (z)| \leq O(n^{-\frac16}) \:\:\:\:
\text{a.s.}
    
\end{aligned}\]</span> so that, for all <span class="math inline">\(z
\in \mathbb U\)</span>, <span class="math display">\[\begin{aligned}
        s_n (z) - \mathbb E s_n (z) \xrightarrow{a.s.} 0 ~.
    
\end{aligned}\]</span> By the linearity of the expectation and trace
operators, we have <span class="math display">\[\begin{aligned}
        \mathbb E s_n (z) = \frac1n \sum_{1 \leq i \leq n} \mathbb E
{\left[ \frac{1}{\sqrt{n}} M_n - zI \right]^{-1}}_{ii} ~,
    
\end{aligned}\]</span> and a straightforward permutation argument shows
that <span class="math display">\[\begin{aligned}
        \mathbb E s_n (z) = \mathbb E {\left[ \frac{1}{\sqrt{n}} M_n -
zI \right]^{-1}}_{nn}
    
\end{aligned}\]</span> because the joint distribution of all elements of
<span class="math inline">\(M_n\)</span> is the same up to permutations
of rows and columns, since <span class="math inline">\(M_n\)</span> is
Wigner. By Schur’s formula for the inverse of a partitioned matrix, i.e.
if <span class="math display">\[\begin{aligned}
        M_n = \begin{pmatrix}
            M_{n-1} &amp; X \\
            X^* &amp; \xi_{nn}
        \end{pmatrix} ~,
    
\end{aligned}\]</span> we have <span
class="math display">\[\begin{aligned}
        {\left[ \frac{1}{\sqrt{n}} M_n - zI \right]^{-1}}_{nn} = \left(
\frac{\xi_{nn}}{\sqrt{n}} - z - \frac{1}{n} X^* \left(
\frac{1}{\sqrt{n}} M_{n-1} - zI \right)^{-1} X \right)^{-1} ~.
    
\end{aligned}\]</span> It is without loss to assume <span
class="math inline">\(\xi_{nn} = 0\)</span>, since we can always centre
the elements appropriately. Therefore, <span
class="math display">\[\begin{aligned}
        \mathbb E {\left[ \frac{1}{\sqrt{n}} M_n - zI \right]^{-1}}_{nn}
= - \mathbb E \left[z + \frac{1}{n} X^* \left( \frac{1}{\sqrt{n}}
M_{n-1} - zI \right)^{-1} X \right]^{-1} ~.
    
\end{aligned}\]</span> Let <span class="math inline">\(R \triangleq
\left( \frac{1}{\sqrt{n}} M_{n-1} - zI \right)^{-1}\)</span>. It remains
to analyze <span class="math inline">\(X^* RX\)</span>. By the spectral
theorem, <span class="math inline">\(\lVert R \rVert_{\rm op} =
O(1)\)</span>. Since <span class="math inline">\(\lVert X \rVert_{\rm
op} = O(\sqrt{n})\)</span> with exponentially high probability (by an
application of Chernoff’s inequality), we then have <span
class="math inline">\(X^* RX = O(n)\)</span> with exponentially high
probability, because <span class="math inline">\(X\)</span> and <span
class="math inline">\(R\)</span> are independent (so we can analyze this
by first conditioning on <span class="math inline">\(R\)</span>).</p>
<p>We are now ready to finish the proof.</p>
<ol>
<li><p>If <span class="math inline">\(A\)</span> is a positive
semidefinite matrix with <span class="math inline">\(\lVert A \rVert =
O(1)\)</span>, then the map <span class="math inline">\(X \mapsto \lVert
A^{\frac12} X \rVert\)</span> is Lipschitz. Therefore, by Talagrand’s
inequality, <span class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(|(X^* AX)^\frac12 - \operatorname{Med}((X^*
AX)^\frac12)| \geq \lambda) \leq C e^{-c\lambda^2}
    
\end{aligned}\]</span> for some absolute constants <span
class="math inline">\(c,C\)</span>. Furthermore, if <span
class="math inline">\(A\)</span> has <span
class="math inline">\(k\)</span> nonzero eigenvalues, it follows that
<span class="math inline">\(\lVert A^{\frac12} X \rVert \geq
\Omega(\sqrt{k})\)</span> with exponentially high probability. Because
<span class="math inline">\((\operatorname{Med}((X^* AX)^\frac12))^2 =
\operatorname{Med}(X^* AX)\)</span>, we then have <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(|(X^* AX) - \operatorname{Med}(X^* AX)| \geq
\lambda\sqrt{k}) \leq C e^{-c\lambda^2}
    
\end{aligned}\]</span> for adjusted absolute constants <span
class="math inline">\(c,C\)</span>. The remaining hurdle is to upgrade
this statement to hold for <span class="math inline">\(R\)</span>. This
is relatively straightforward, because for any random variable <span
class="math inline">\(Y\)</span> with bounded second moment, <span
class="math inline">\(|\mathbb E (Y) - \operatorname{Med}(Y)| =
O(\sqrt{\mathop{\mathrm{Var}}(Y)})\)</span>. Therefore, writing <span
class="math inline">\(A = A_+ + A_-\)</span>, where <span
class="math inline">\(A_+\)</span> has only positive eigenvalues and
<span class="math inline">\(A_-\)</span> has only negative eigenvalues,
we have <span class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(|(X^* AX) - \mathbb E[X^* AX]| \geq
\lambda\sqrt{n}) \leq C e^{-c\lambda^2}
    
\end{aligned}\]</span> by triangle inequality and for different absolute
constants <span class="math inline">\(c,C\)</span>. With this, we can
put <span class="math inline">\(R\)</span> in place of <span
class="math inline">\(A\)</span> and change the constants to arrive at
the desired conclusion. Finally, because <span
class="math inline">\(\mathbb E[X^* RX] = \sum_{1 \leq i,j \leq n-1}
\mathbb E \overline{\xi_{ij}} r_{ij} \xi_{ij} = \sum_{1 \leq i,j \leq
n-1} r_{ij} \delta_{ij} = \operatorname{Tr}(R)\)</span>, we can replace
<span class="math inline">\(\mathbb E[X^* RX]\)</span> by <span
class="math inline">\(\operatorname{Tr}(R)\)</span> to arrive at the
desired result for deterministic <span
class="math inline">\(R\)</span>.</p></li>
<li><p><span class="math inline">\(R\)</span> is random, but independent
of <span class="math inline">\(X\)</span>; so, conditional on <span
class="math inline">\(R\)</span>, <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(|X^* RX - \operatorname{Tr}(R)| \geq
\lambda\sqrt{n}) = \mathbb E [\mathbf P\,\,\!\!(|X^* RX -
\operatorname{Tr}(R)| \geq \lambda\sqrt{n}) \mid R] \leq C
e^{-c\lambda^2} ~.
    
\end{aligned}\]</span> Here, <span class="math inline">\(c,C\)</span>
are some choices of absolute constants. Also note that, from before, we
have <span class="math inline">\(\operatorname{Tr}(R) = \sqrt{n(n-1)}
s_n \left( \sqrt{\frac{n}{n-1}} z \right) = n (s_n(z) + o(1))\)</span>,
hence <span class="math inline">\(X^* RX = n (\mathbb E s_n(z) +
o(1))\)</span> with exponentially high probability.</p></li>
<li><p>Let <span class="math inline">\(\Omega_R\)</span> denote the
support of the random variable <span class="math inline">\(R\)</span>.
Based on foregone calculations, define <span
class="math display">\[\begin{aligned}
        E_n \triangleq \{ \omega \in \Omega_R : |X^* R(\omega) X -
\operatorname{Tr}(R(\omega))| \geq n^{\frac13} \} ~.
    
\end{aligned}\]</span> We therefore have <span
class="math display">\[\begin{aligned}
        \mathbb E s_n(z) &amp;= -\mathbb E\left[ z + \frac1n X^* R X
\right]^{-1} \\
        &amp;= -\mathbb E\left[ \left(z + \frac1n X^* R X\right) \mathbb
1_{E_n} (\omega) \right]^{-1} + o(1) \\
        &amp;= -\mathbb E\left[ \left(z + \frac1n (n (\mathbb E s_n(z) +
o(1))) \right) \mathbb 1_{E_n} (\omega) \right]^{-1} + o(1) \\
        &amp;= -\frac{1}{z+\mathbb E s_n(z)} + o(1) ~.
    
\end{aligned}\]</span> By the uniform boundedness of the derivatives of
<span class="math inline">\(\mathbb E s_n(z)\)</span> and Fubini’s
theorem, we have that <span class="math inline">\(\mathbb E
s_n(z)\)</span> is locally, uniformly bounded away from the real line
<em>and</em> locally, uniformly equicontinuous. Therefore, along a
subsequence, <span class="math inline">\(\mathbb E s_n\)</span>
converges to <span class="math inline">\(s(z)\)</span> uniformly, with
<span class="math display">\[\begin{aligned}
        \frac{1}{s(z)} = -\frac{2}{z \pm \sqrt{z^2 - 4}} ~,
    
\end{aligned}\]</span> i.e. using the branch cut <span
class="math inline">\(s(z) = \frac{-1 + o(1)}{z}\)</span>, we have <span
class="math display">\[\begin{aligned}
        s(z) = \frac{-z + \sqrt{z^2-4}}{2} ~.
    
\end{aligned}\]</span> This is the unique limit along this branch cut,
so <span class="math inline">\(s_n (z) \xrightarrow{a.s.} s(z)\)</span>.
Finally, noticing that <span class="math display">\[\begin{aligned}
        \frac{s_n (\cdot + bi) - s_n (\cdot - bi)}{2\pi i}
\xrightarrow{d} \mu_{\rm sc} ~,
    
\end{aligned}\]</span> we can apply Lemma <a
href="#lem:stieltjes-cvg-pointwise" data-reference-type="ref"
data-reference="lem:stieltjes-cvg-pointwise">11</a> to conclude that
<span class="math inline">\(\mu_n \xrightarrow{d} \mu_{\rm sc}\)</span>
almost surely.</p></li>
</ol>
<p>This concludes the proof. ◻</p>
</div>
<p>We prove the following auxiliary fact used in the second proof of
Theorem <a href="#thm:semicircular-law" data-reference-type="ref"
data-reference="thm:semicircular-law">8</a> (using Stieltjes
transform).</p>
<div id="lem:stieltjes-cvg-pointwise" class="lemma">
<p><strong>Lemma 11</strong>. <span class="math inline">\(\mu_n
\xrightarrow{d} \mu\)</span> if and only if <span
class="math inline">\(s_{\mu_n} (z) \to s_\mu (z)\)</span> pointwise for
all <span class="math inline">\(z \in \mathbb U\)</span>.</p>
</div>
<div class="proof">
<p><em>Proof.</em> The “only if” direction follows from the Portmanteau
theorem. For the “if” direction, let <span
class="math inline">\(F_n\)</span> denote the distribution function of
<span class="math inline">\(\mu_n\)</span>. Helley’s selection theorem
implies there exists a subsequence <span
class="math inline">\(\{F_{n_k}\}\)</span> and a right-continuous
function <span class="math inline">\(F\)</span> such that <span
class="math inline">\(F_{n_k} \to F\)</span> at all continuity points of
<span class="math inline">\(F\)</span>. If we let <span
class="math inline">\(\mu_F\)</span> denote the probability measure with
distribution function <span class="math inline">\(F\)</span>, then <span
class="math inline">\(s_{\mu_F} (z) = s_\mu (z)\)</span> by the “only
if” part, and <span class="math display">\[\begin{aligned}
        \frac{s_{\mu_F}(\cdot + bi) - s_{\mu_F}(\cdot - bi)}{2\pi i}
\rightsquigarrow \mu
    
\end{aligned}\]</span> i.e. in the weak-<span
class="math inline">\(\star\)</span> topology, implying <span
class="math inline">\(\mu=\mu_F\)</span>. In other words, for every
sequence <span class="math inline">\(\mu_n\)</span>, there exists a
further subsequence that converges to <span
class="math inline">\(\mu\)</span> in the weak-<span
class="math inline">\(\star\)</span> topology, which concludes the
proof. ◻</p>
</div>
{% endraw %}
