---
layout: post
title: "Tools to Study the Complexity of Function Classes"
date: 2026-06-15
tags: [math, statistics]
excerpt: >-
  Suppose that \(X_1, \dots, X_n\) are independent random variables defined on the space \(\mathscr X\) with probability measure \(\mathbf P\,\,\!\!\). Suppose furthermore that \(X_1, \dots, X_n\) are identically distributed, and let \(F\) denote the distribution function of \(\mathbf P\,\,\!\!\).
---
{% raw %}
<p>Suppose that <span class="math inline">\(X_1, \dots, X_n\)</span> are
independent random variables defined on the space <span
class="math inline">\(\mathscr X\)</span> with probability measure <span
class="math inline">\(\mathbf P\,\,\!\!\)</span>. Suppose furthermore
that <span class="math inline">\(X_1, \dots, X_n\)</span> are
identically distributed, and let <span class="math inline">\(F\)</span>
denote the distribution function of <span class="math inline">\(\mathbf
P\,\,\!\!\)</span>. The strong law of large numbers says that for any
Borel measurable function (i.e. measurable when both the domain and the
range are equipped with the Borel <span
class="math inline">\(\sigma\)</span>-algebra) <span
class="math inline">\(h: \mathbb R \to \mathbb R\)</span> such that
<span class="math inline">\(\mathbb E |h(X_i)| &lt; \infty\)</span>, we
have <span class="math display">\begin{equation}\label{eq:slln}\begin{aligned}

    \frac1n \sum_{1 \leq i \leq n} h(X_i) \to \mathbb E h(X_i) ~~ \rm
a.s.
\end{aligned}\end{equation}</span> as <span class="math inline">\(n \to
\infty\)</span>. But it turns out that an even stronger statement is
true: take the function <span class="math inline">\(h(X_i) = \mathbb 1
\{X_i \leq x\}\)</span> for <span class="math inline">\(x \in \mathbb
R\)</span>, so that the left-hand side of \eqref{eq:slln}
reduces to the empirical distribution function <span
class="math display">\[\begin{aligned}
    \widehat F_n (x) = \frac1n \sum_{1 \leq i \leq n} \mathbb 1 \{ X_i
\leq x \} ~,
\end{aligned}\]</span> and the stronger statement is upgrading \eqref{eq:slln} to hold true over the entire
domain <span class="math inline">\(\mathbb R\)</span>, i.e. <span class="math display">\begin{equation}\label{eq:glivenko-cantelli}\begin{aligned}

    \sup_{x \in \mathbb R} |\widehat F_n (x) - F(x)| \to 0 ~~ \rm a.s.
\end{aligned}\end{equation}</span> as <span class="math inline">\(n \to
\infty\)</span>. This is the original formulation of the
<em>Glivenko-Cantelli theorem</em>. Note that there is a certain
“hardness” to showing this statement is true: <span
class="math inline">\(\widehat F_n\)</span> is random, as it depends on
the realizations of <span class="math inline">\(X_1, \dots,
X_n\)</span>. However, the problem is much easier to tackle when we
examine this from the perspective of the <em>function class</em> we are
working with. The rest of this section develops tools to characterize
and study function classes.</p>
<h2 id="bracketing">Bracketing</h2>
<p>As above, heuristically, whether the uniform convergence holds
depends on the complexity of the class of functions we consider. Here,
we follow historical development and described the case when the
function class considered is the set of indicator functions, <span
class="math inline">\(g_x (t) = \mathbb 1 \{t \leq x\}\)</span>. A
priori, if we could somehow “approximate” this class of functions by a
small class of functions, then we could apply the strong law of large
numbers to each function in the small class, and hope the “approximation
error” is small. We develop the definitions in a general setting, with
an eye to apply this to Glivenko-Cantelli theorem in the extended remark
below.</p>
<p>Let <span class="math inline">\(L^q (\mathbf P\,\,\!\!)\)</span>
denote the space of functions <span class="math inline">\(g\)</span>
(defined on some ambient space <span class="math inline">\(\mathscr
X\)</span>) such that <span class="math inline">\(P |g|^q &lt;
\infty\)</span>. While pedantic, it is important to indicate norms with
an eye to differentiate <span class="math inline">\(L^q (\mathbf
P\,\,\!\!)\)</span> for different <span
class="math inline">\(q\)</span>; so, we write <span
class="math inline">\(\lVert \cdot \rVert_{\mathbf P\,\,\!\!,q}\)</span>
for the norm on <span class="math inline">\(L^q(P)\)</span>. In the
sequel, it is useful to think about <span class="math inline">\(\mathcal
F = (\mathcal F, \lVert \cdot \rVert_{\mathbf P\,\,\!\!,q})\)</span> as
a subset (subspace) of normed space <span class="math inline">\(L^q
(\mathbf P\,\,\!\!)\)</span>. For now, take any functions <span
class="math inline">\(l, u \in L^q (\mathbf P\,\,\!\!)\)</span>, and
suppose <span class="math inline">\(l \leq u\)</span> pointwise (i.e.
holds at every point <span class="math inline">\(x \in \mathscr
X\)</span>). Then, we define the <em>bracket</em> of the class of
functions <span class="math inline">\(L^q (\mathbf P\,\,\!\!)\)</span>,
denoted <span class="math inline">\([l,u]\)</span>, as <span class="math display">\begin{equation}\label{eq:bracket}\begin{aligned}

    [l,u] \triangleq \{ g \in L^q (\mathbf P\,\,\!\!) : l(x) \leq g(x)
\leq u(x) ~ \text{for all } x \in \mathscr X \} ~.
\end{aligned}\end{equation}</span> An <em><span
class="math inline">\(\varepsilon\)</span>-bracket</em> is a bracket
<span class="math inline">\([l,u]\)</span> with <span
class="math inline">\(\lVert l-u \rVert_{\mathbf P\,\,\!\!,q} = (\mathbf
P\,\,\!\!^q|l-u|)^{\frac1q} &lt; \varepsilon\)</span>. For <span
class="math inline">\(\mathcal F\)</span>, the <em>bracketing
number</em> <span class="math inline">\(N_{[\:]} (\varepsilon, \mathcal
F, \lVert \cdot \rVert_{\mathbf P\,\,\!\!,q})\)</span> is the minimum
number of <span class="math inline">\(\varepsilon\)</span>-brackets
needed to cover <span class="math inline">\(\mathcal F\)</span>; here,
<span class="math inline">\(l\)</span> and <span
class="math inline">\(u\)</span> do not need to belong to <span
class="math inline">\(\mathcal F\)</span>. Finally, we say a function
<span class="math inline">\(x \mapsto F(x)\)</span> is an <em>envelope
function of a class <span class="math inline">\(\mathcal F\)</span></em>
if <span class="math inline">\(|f(x)| \leq F(x)\)</span> for every <span
class="math inline">\(x \in \mathscr X\)</span> and <span
class="math inline">\(f \in \mathcal F\)</span>. The <em>minimum
envelope function</em> is <span class="math inline">\(x \mapsto \sup_{f
\in \mathcal F} |f(x)|\)</span>.</p>
<div id="eg:glivenko-cantelli-l1" class="remark">
<p><strong>Remark 3</strong> (Glivenko-Cantelli). On <span
class="math inline">\(\mathbb R\)</span>, consider the class of
indicator functions <span class="math display">\[\begin{aligned}
    g_x (t) = \mathbb 1 \{t \leq x\} = \mathbb 1_{(-\infty, x]} (t) ~.
\end{aligned}\]</span> For clarity, let us write <span
class="math inline">\(\mathcal F_1 = \{ g_x : x \in \mathbb R
\}\)</span>. Since these functions are defined on the real line, we look
at <span class="math inline">\(L^1 (\mathbf P\,\,\!\!)\)</span>
functions. We can show a number of things is true about this function
class.</p>
<div id="lem:bracketing-number-g-c" class="lemma">
<p><strong>Lemma 1</strong>. <span class="math inline">\(N_{[\:]}
(\varepsilon, \mathcal F_1, \lVert \cdot \rVert_{\mathbf P\,\,\!\!,1})
&lt; \infty\)</span> for any <span class="math inline">\(\varepsilon
&gt; 0\)</span>.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Let <span class="math inline">\(F\)</span> be the
distribution function of <span class="math inline">\(\mathbf
P\,\,\!\!\)</span>. For each <span class="math inline">\(x \in \mathbb
R\)</span>, define <span class="math inline">\(F(x) = \mathbf
P\,\,\!\!(-\infty, x]\)</span> and <span class="math inline">\(F(x-) =
\mathbf P\,\,\!\!(-\infty, x)\)</span>. By the continuity of measures,
we have that <span class="math display">\[\begin{aligned}
        \lim\limits_{t \to x^-} F(t) = F(x-) ~~\text{and}~~
\lim\limits_{t \to x^+} F(t) = F(x) ~.
    
\end{aligned}\]</span> We can now show the desired statement by
recursively constructing the endpoints of brackets. Let <span
class="math display">\[\begin{aligned}
        t_1 = \inf \{ x \in \mathbb R : F(x) \geq 2^{-1} \varepsilon \}
~.
    
\end{aligned}\]</span> Then clearly, <span class="math inline">\(F(t_1)
\geq \frac{\varepsilon}{2}\)</span> and <span
class="math inline">\(F(t_1 + \eta) \geq \frac{\varepsilon}{2}\)</span>
for any <span class="math inline">\(\eta &gt; 0\)</span>, by the
continuity properties above. Furthermore, we have that <span
class="math inline">\(F\)</span> is right-continuous. To continue the
recursive construction, note that for any <span
class="math inline">\(\eta &gt; 0\)</span>, <span
class="math inline">\(F(t_1 - \eta) &lt; \frac{\varepsilon}{2}\)</span>;
if not, then we violate the definition of <span
class="math inline">\(t_1\)</span>. Therefore, passing <span
class="math inline">\(\eta \to 0\)</span>, we have <span
class="math inline">\(F(t_1 - \eta) \to F(t_1 -) \leq
\frac{\varepsilon}{2}\)</span> by the definition of <span
class="math inline">\(t_1\)</span>. This suggests we can now define
<span class="math display">\[\begin{aligned}
        t_2 = \inf \{ x \geq t_1 : F(x) - F(t_1) \geq 2^{-1} \varepsilon
\} ~.
    
\end{aligned}\]</span> Done this way, we have <span
class="math inline">\(F(t_2) - F(t_1) \geq
\frac{\varepsilon}{2}\)</span> by construction. Furthermore, by the same
continuity argument, for any <span class="math inline">\(\eta &gt;
0\)</span>, <span class="math inline">\(F(t_2 - \eta) - F(t_1) &lt;
\frac{\varepsilon}{2}\)</span>, so we must have <span
class="math inline">\(F(t_2-) - F(t_1) \leq
\frac{\varepsilon}{2}\)</span>. Repeating these arguments gives us a
finite number of points <span class="math inline">\(t_1, \dots,
t_k\)</span> such that <span class="math display">\[\begin{aligned}
        F(t_j - \eta) - F(t_{j-1}) \leq \frac{\varepsilon}{2} &lt;
\varepsilon ~~\text{for } 1 \leq j \leq k+1 ~,
    
\end{aligned}\]</span> where we take <span class="math inline">\(t_0 =
-\infty\)</span> and <span class="math inline">\(t_{k+1} =
\infty\)</span>. Such <span class="math inline">\(k\)</span> must be
finite, because <span class="math inline">\(F(t_{j+1}) - F(t_j) \geq
\frac{\varepsilon}{2}\)</span> for each <span
class="math inline">\(j\)</span>, and <span class="math inline">\(F \leq
1\)</span> because it is a distribution function. We can then construct
the desired bracket as <span class="math display">\[\begin{aligned}
        [l,u] = \left[ \mathbb 1_{(-\infty, t_{j-1}]}, \mathbb
1_{(-\infty, t_j)} \right] ~.
    
\end{aligned}\]</span> It then follows from inspection that this is the
desired bracket. ◻</p>
</div>
<p>At the fullest level of generality, we can show that finite
bracketing number implies the Glivenko-Cantelli theorem. In what
follows, let <span class="math display">\[\begin{aligned}
    \widehat P_n = \frac1n \sum_{1 \leq k \leq n} \delta_{X_i}
\end{aligned}\]</span> denote the empirical measure of i.i.d. <span
class="math inline">\(X_1, \dots, X_n\)</span> observations on <span
class="math inline">\(\mathscr X\)</span>.</p>
<div id="thm:finite-bracketing-implies-g-c" class="theorem">
<p><strong>Theorem 2</strong>. Let <span class="math inline">\(\mathcal
F\)</span> be a function class such that <span
class="math inline">\(N_{[\:]} (\varepsilon, \mathcal F, \lVert \cdot
\rVert_{\mathbf P\,\,\!\!,1}) &lt; \infty\)</span> for any <span
class="math inline">\(\varepsilon &gt; 0\)</span>. Then, <span
class="math inline">\(\sup_{g \in \mathcal F} | \widehat P_n g - Pg |
\to 0\)</span> almost surely.</p>
</div>
<p>Note that a lot of texts write <span class="math inline">\(\lVert
\widehat P_n - \mathbf P\,\,\!\!\rVert_{\mathcal F} \triangleq \sup_{g
\in \mathcal F} |\widehat P_n g - \mathbf P\,\,\!\!g|\)</span>.</p>
<div class="proof">
<p><em>Proof.</em> Fix <span class="math inline">\(\varepsilon &gt;
0\)</span>. By the hypotheses, there exists functions <span
class="math inline">\(l_1, \dots, l_k\)</span> and <span
class="math inline">\(u_1, \dots, u_k\)</span> such that for each <span
class="math inline">\(g \in \mathcal F\)</span>, there exists some <span
class="math inline">\(j\)</span> such that <span
class="math inline">\(l_j(x) \leq g(x) \leq u_j\)</span> for all <span
class="math inline">\(x \in \mathscr X\)</span> and <span
class="math inline">\(\lVert l_j - u_j \rVert_1 &lt; \infty\)</span>.
Then, it follows that <span class="math display">\[\begin{aligned}
        \widehat P_n g - \mathbf P\,\,\!\!g &amp;\geq \widehat P_n l_j -
\mathbf P\,\,\!\!g \geq \widehat P_n l_j - \mathbf P\,\,\!\!l_j -
\varepsilon \\
        \end{aligned}\]</span>

<p>and</p>

<span class="math display">\[\begin{aligned}
        \widehat P_n g - \mathbf P\,\,\!\!g &amp;\leq \widehat P_n u_j -
\mathbf P\,\,\!\!g \geq \widehat P_n u_j - \mathbf P\,\,\!\!u_j +
\varepsilon ~.
    
\end{aligned}\]</span> When <span class="math inline">\(\widehat P_n g -
\mathbf P\,\,\!\!g &gt; 0\)</span>, we have <span
class="math inline">\(\widehat P_n u_j - \mathbf P\,\,\!\!u_j +
\varepsilon &gt; 0\)</span>. When <span class="math inline">\(\widehat
P_n g - \mathbf P\,\,\!\!g \leq 0\)</span>, we have <span
class="math inline">\(0 \geq \widehat P_n l_j - \mathbf P\,\,\!\!l_j -
\varepsilon\)</span>. Combining these inequalities, we must have <span
class="math display">\[\begin{aligned}
        |\widehat P_n g - \mathbf P\,\,\!\!g| &amp;\leq \max \{
|\widehat P_n l_j - \mathbf P\,\,\!\!l_j|, |\widehat P_n u_j - \mathbf
P\,\,\!\!u_j| \} + \varepsilon ~. \\
        \end{aligned}\]</span>

<p>This inequality holds for all $g \in \mathcal F$; the
functions $l_j$ and $u_j$ of the brackets may differ for each $g$.
Therefore, taking the supremum over the entire function class gives</p>

<span class="math display">\[\begin{aligned}
        \sup_{g \in \mathcal F} |\widehat P_n g - \mathbf P\,\,\!\!g|
&amp;\leq \sup_{1 \leq j \leq k} \max \{ |\widehat P_n l_j - \mathbf
P\,\,\!\!l_j|, |\widehat P_n u_j - \mathbf P\,\,\!\!u_j| \} +
\varepsilon ~.
    
\end{aligned}\]</span> But it is clear that we can apply the strong law
of large numbers to each <span class="math inline">\(j\)</span>. The
right-hand side of the inequality above therefore converges to <span
class="math inline">\(\varepsilon\)</span>. The conclusion follows from
the fact that we chose <span class="math inline">\(\varepsilon\)</span>
arbitrarily. ◻</p>
</div>
<p>The Glivenko-Cantelli theorem then follows directly from Theorem <a
href="#thm:finite-bracketing-implies-g-c" data-reference-type="ref"
data-reference="thm:finite-bracketing-implies-g-c">2</a>.</p>
</div>
<div id="rem:g-c-concentration" class="remark">
<p><strong>Remark 5</strong> (Glivenko-Cantelli via concentration
inequality). Let <span class="math inline">\(X_1, \dots, X_n\)</span>
denote ii.i.d. random variables on <span class="math inline">\(\mathscr
X\)</span>. Let <span class="math inline">\(\mathcal F\)</span> denote a
collection of real-valued functions on <span
class="math inline">\(\mathscr X\)</span> uniformly bounded by a
positive constant <span class="math inline">\(M\)</span>, i.e. <span class="math display">\begin{equation}\label{property:uniformly-bounded-function}\begin{aligned}

        \sup_{x \in \mathscr X} |f(x)| \leq M ~~\text{for all } f \in
\mathcal F ~.
    
\end{aligned}\end{equation}</span> Define <span
class="math display">\[\begin{aligned}
        g(x_1, \dots, x_n) \triangleq \left| \frac1n \sum_{1 \leq k \leq
n} f(x_i) - \mathbb E f(X_1) \right| ~.
    
\end{aligned}\]</span> Note that, by direct calculations and the uniform
boundedness assumption \eqref{property:uniformly-bounded-function},
<span class="math display">\[\begin{aligned}
        g(x_1, \dots, x_{i-1}, x&#39;_i, x_{i+1}, \dots, x_n) &amp;=
\left| \frac1n \sum_{k \neq i} f(x_k) + \frac{f(x&#39;_i)}{n} - \mathbb
E f(X_1) \right| \\
        &amp;= \left| \frac1n \sum_{1 \leq k \leq n} f(x_k) - \mathbb E
f(X_1) + \frac{f(x&#39;_i)}{n} - \frac{f(x_i)}{n} \right| \\
        &amp;\leq \left| \frac1n \sum_{1 \leq k \leq n} f(x_k) - \mathbb
E f(X_1) \right| + \frac{2M}{n} \\
        &amp;\leq g(x_1, \dots, x_n) + \frac{2M}{n} ~.
    
\end{aligned}\]</span> Interchanging the roles of <span
class="math inline">\(x_i\)</span> and <span
class="math inline">\(x&#39;_i\)</span>, we then have that <a href="{% post_url 2026-06-15-fundamental-techniques %}#property:bounded-difference">bounded difference property</a>
holds with <span class="math inline">\(d_i = \frac{2M}{n}\)</span>. By
McDiarmid’s inequality, we then have the tail bound <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(| f(X_1, \dots, X_n) - \mathbb E f(X_1, \dots,
X_n) | &gt; t) \leq 2 e^{-\frac{nt^2}{2M^2}} ~~\text{for all } t \geq 0
~.
    
\end{aligned}\]</span> So, with probability at least <span
class="math inline">\(1 - 2\delta\)</span>, we have <span
class="math display">\[\begin{aligned}
        | f(X_1, \dots, X_n) - \mathbb E f(X_1, \dots, X_n) | \leq
\sqrt{\frac{2M^2}{n} \log \frac{1}{\delta} }
    
\end{aligned}\]</span> for every <span class="math inline">\(\delta &gt;
0\)</span>.</p>
<p>Now that we understand <span class="math inline">\(\mathbb E f(X_1,
\dots, X_n)\)</span> is the dominating term for understanding the
behaviour of <span class="math inline">\(f(X_1, \dots, X_n)\)</span>, we
can use this to study the statement of the Glivenko-Cantelli theorem.
The original statement of the Glivenko-Cantelli theorem is on the real
line.</p>
<div id="thm:g-c-concentration" class="theorem">
<p><strong>Theorem 4</strong>. Let <span class="math inline">\(X_1,
\dots, X_n\)</span> are i.i.d. real-valued random variabels with
distribution <span class="math inline">\(\mathbf P\,\,\!\!\)</span> and
cumulative distribution function <span class="math inline">\(F\)</span>.
Let <span class="math inline">\(\widehat F_n\)</span> denote the
empirical distribution function associated with the data <span
class="math inline">\(X_1, \dots, X_n\)</span>. Then, <span class="math display">\begin{equation}\label{eq:g-c-concentration-quantity}\begin{aligned}

            \mathbf P\,\,\!\!\left( \sup_{x \in \mathbb R} |\widehat
F_n(x) - F(x)| \geq 8 \sqrt{\frac{\log(n+1)}{n}} + t \right) \leq
e^{-\frac{nt^2}{2}} ~~\text{for all }t &gt; 0 ~.
        
\end{aligned}\end{equation}</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> We know from our earlier discussion, the function
class we consider here is <span class="math inline">\(\mathcal
F_1\)</span>, as defined earlier. We now bound <span
class="math inline">\(\mathbb E f(X_1, \dots, X_n)\)</span>. To do so,
we appeal to symmetriaation: let <span
class="math inline">\(\varepsilon_1, \dots, \varepsilon_n\)</span>
denote Rademacher random variables, which are independent of <span
class="math inline">\(X_1, \dots, X_n\)</span>. It is clear that, by
independence<a href="#fn1" class="footnote-ref" id="fnref1"
role="doc-noteref"><sup>1</sup></a>, <span class="math display">\begin{equation}\label{eq:conditional-indep-bound}\begin{aligned}

            \mathbb E f(X_1, \dots, X_n) \leq 2 \mathbb E \bigg[ \mathbb
E \bigg[ \sup_{f \in \mathcal F_1}\bigg| \frac1n \sum_{1 \leq k \leq n}
\varepsilon_k f(X_k) \bigg| ~\bigg|~ \varepsilon_1, \dots, \varepsilon_n
\bigg] ~\bigg|~ X_1, \dots, X_n \bigg] ~.
        
\end{aligned}\end{equation}</span> For any fixed <span class="math inline">\((x_1,
\dots, x_n) \in \mathbb R^n\)</span>, if we define <span
class="math display">\[\begin{aligned}
            \Delta_n (\mathcal F_1; x_1, \dots, x_n) \triangleq \{
(f(x_1), \dots, f(x_n)) : f \in \mathcal F_1 \} ~,
        
\end{aligned}\]</span> then note that this set takes on at most <span
class="math inline">\(n+1\)</span> distinct values, because the
indicator functions take on the value one on only finitely many
intervals split by the <em>ordered</em> vector <span
class="math inline">\((x_{(1)}, \dots, x_{(n)})\)</span>. Therefore, we
must then have <span class="math inline">\(\sup_{f \in \mathcal F_1} |
\frac1n \sum_{1 \leq k \leq n} \varepsilon_k f(X_k) |\)</span> is the
supremum over <span class="math inline">\(n+1\)</span> values, which is
well-defined, and applying the concentration results in Example <a
href="{% post_url 2026-06-15-fundamental-techniques %}#eg:rademacher-subgaussian" data-reference-type="ref"
data-reference="eg:rademacher-subgaussian">[eg:rademacher-subgaussian]</a>
gives us the inequality <span class="math display">\[\begin{aligned}
            \mathbb E \sup_{f \in \mathcal F_1} \Bigg| \frac1n \sum_{1
\leq k \leq n} \varepsilon_k f(X_k) \Bigg| \leq 4
\sqrt{\frac{\log(n+1)}{n}} ~.
        
\end{aligned}\]</span> Therefore—combining everything above—we then
have, by a preceding concentration inequality, \eqref{eq:g-c-concentration-quantity}. ◻</p>
</div>
<p>This clearly then implies the Glivenko-Cantelli theorem by
Borel-Cantelli.</p>
</div>
<p>We return to the study of the uniform law of large numbers in Section
<a href="{% post_url 2026-06-16-more-on-the-uniform-law-of-large-numbers %}#sec:ulln" data-reference-type="ref"
data-reference="sec:ulln">[sec:ulln]</a>.</p>
<h2 id="covering">Covering</h2>
<p>Another way of looking at complexity of a function class is via
<em>covering numbers</em>. For a set <span
class="math inline">\(\Theta\)</span> equipped with a metric <span
class="math inline">\(d\)</span>, let <span class="math inline">\(\Theta
\subset \overline \Theta\)</span> such that <span
class="math inline">\(d(\cdot,\cdot)\)</span> is defined on <span
class="math inline">\(\overline \Theta\)</span>. We say a set <span
class="math inline">\(\{\theta_1, \dots, \theta_N\} \subset \overline
\Theta\)</span> is an <em><span
class="math inline">\(\varepsilon\)</span>-cover</em> for <span
class="math inline">\(\Theta\)</span> is, for all <span
class="math inline">\(\theta \in \Theta\)</span>, there exists some
<span class="math inline">\(j \in \{1, \dots, N\}\)</span> such that
<span class="math inline">\(d(\theta,\theta_j) \leq
\varepsilon\)</span>. Correspondingly, the <em><span
class="math inline">\(\varepsilon\)</span>-covering number</em> for
<span class="math inline">\(\Theta\)</span> is the smallest <span
class="math inline">\(N\)</span> such that <span
class="math inline">\(\{\theta_1, \dots, \theta_N\}\)</span> is an <span
class="math inline">\(\varepsilon\)</span>-cover for <span
class="math inline">\(\Theta\)</span>, formally written as <span
class="math display">\[\begin{aligned}
    N(\varepsilon, \Theta, d) \triangleq \inf \{ N \in \mathbb N :
\text{$\{\theta_1, \dots, \theta_N\}$ is an $\varepsilon$-cover for
$\Theta$} \} ~.
\end{aligned}\]</span> We say <span
class="math inline">\(\Theta\)</span> is <em>totally bounded</em> if
<span class="math inline">\(N(\varepsilon, \Theta, d)\)</span> is finite
for all <span class="math inline">\(\varepsilon &gt; 0\)</span>.</p>
<p>In addition to looking at covering, we could also look at packing. An
<em><span class="math inline">\(\varepsilon\)</span>-packing</em> of a
set <span class="math inline">\(\Theta\)</span> (with respect to metric
<span class="math inline">\(d\)</span>) is a set <span
class="math inline">\(\{\theta_1, \dots, \theta_D\} \subset
\Theta\)</span> such that for all <span class="math inline">\(i \neq
j\)</span>, <span class="math inline">\(i,j \in \{1,\dots,D\}\)</span>,
<span class="math inline">\(d(\theta_i, \theta_j) &gt;
\varepsilon\)</span>. Corresponding, the <em><span
class="math inline">\(\varepsilon\)</span>-packing number</em> of <span
class="math inline">\(\Theta\)</span> is the maximum number <span
class="math inline">\(D\)</span> such that <span
class="math inline">\(\{\theta_1, \dots, \theta_D\}\)</span> is an <span
class="math inline">\(\varepsilon\)</span>-packing of <span
class="math inline">\(\Theta\)</span>, formally written as <span
class="math display">\[\begin{aligned}
    D(\varepsilon, \Theta, d) \triangleq \sup \{ D \in \mathbb N :
\{\theta_1, \dots, \theta_D\} \text{ is an $\varepsilon$-packing of
$\Theta$} \} ~.
\end{aligned}\]</span> By definitions, we can understand the covering
number as the minimum number of <span
class="math inline">\(\varepsilon\)</span>-balls required to cover <span
class="math inline">\(\Theta\)</span>. And, we can understand the
packing number as the maximum number of <span
class="math inline">\(\varepsilon\)</span>-separated points in <span
class="math inline">\(\Theta\)</span>. Neither of these quantities need
to be finite. There are a number of interesting, fundamental facts.</p>
<div id="lem:covering-packing-comparisons" class="lemma">
<p><strong>Lemma 6</strong>. For any <span
class="math inline">\(\varepsilon &gt; 0\)</span>, <span
class="math display">\[\begin{aligned}
        D(2\varepsilon, \Theta, d) \leq N(\varepsilon, \Theta, d) \leq
D(\varepsilon, \Theta, d) ~.
    
\end{aligned}\]</span></p>
</div>
<p>We can view this as a form of duality: the packing number is defined
in terms of a supremum, but the covering number is defined in terms of
an infimum.</p>
<div class="proof">
<p><em>Proof.</em> The second inequality is considerably easier to show.
For a fixed <span class="math inline">\(\varepsilon &gt; 0\)</span>,
writing <span class="math inline">\(D = D(\varepsilon, \Theta,
d)\)</span>, suppose <span class="math inline">\(\{\theta_1, \dots,
\theta_D\}\)</span> is the maximal <span
class="math inline">\(\varepsilon\)</span>-packing of <span
class="math inline">\(\Theta\)</span>. Then, for any <span
class="math inline">\(\theta \in \Theta \setminus \{\theta_1, \dots,
\theta_D\}\)</span>, there exists a some <span class="math inline">\(i
\in \{1, \dots, D\}\)</span> such that <span
class="math inline">\(d(\theta,\theta_i) \leq \varepsilon\)</span>. If
there does not exist such an index <span
class="math inline">\(i\)</span>, then we can include <span
class="math inline">\(\theta\)</span> into the <span
class="math inline">\(\varepsilon\)</span>-packing set, thereby
increasing its size by one, contradicting the statement that <span
class="math inline">\(\{\theta_1, \dots, \theta_D\}\)</span> is maximal.
Therefore, <span class="math inline">\(\{\theta_1, \dots,
\theta_D\}\)</span> is also an <span
class="math inline">\(\varepsilon\)</span>-cover for <span
class="math inline">\(\Theta\)</span>. By definition, <span
class="math inline">\(N(\varepsilon, \Theta, d)\)</span> is the minimal
number of elements in an <span
class="math inline">\(\varepsilon\)</span>-cover of <span
class="math inline">\(\Theta\)</span>, so <span
class="math inline">\(N(\varepsilon, \Theta, d) \leq D(\varepsilon,
\Theta, d)\)</span> holds.</p>
<p>For the first inequality, by an abuse of notations, suppose <span
class="math inline">\(D = \{\theta_1, \dots, \theta_D\}\)</span> is the
maximal <span class="math inline">\(2\varepsilon\)</span>-packing, and
let <span class="math inline">\(N = \{\theta_1, \dots,
\theta_N\}\)</span> be the minimal <span
class="math inline">\(\varepsilon\)</span>-cover. For every <span
class="math inline">\(\theta \in D\)</span>, by an analogous argument as
above, we have that there exists some element <span
class="math inline">\(i \in \{1, \dots, N\}\)</span> such that <span
class="math inline">\(d(\theta, \theta_i) \leq \varepsilon\)</span>. If
not, then <span class="math inline">\(\theta\)</span> is not contained
any of the <span class="math inline">\(\varepsilon\)</span>-balls
covering <span class="math inline">\(\Theta\)</span>, contradicting the
definition of an <span class="math inline">\(\varepsilon\)</span>-cover.
Construct a map <span class="math inline">\(f\)</span> that maps <span
class="math inline">\(\theta\)</span> to each of these <span
class="math inline">\(\theta_i\)</span>, as described above. Then, for
any <span class="math inline">\(\theta \neq \widetilde\theta\)</span>,
<span class="math inline">\(\theta, \widetilde\theta \in D\)</span>, we
must have <span class="math display">\[\begin{aligned}
        2\varepsilon &amp;&lt; d(\theta,\widetilde\theta) \leq
d(\theta,f(\theta)) + d(f(\theta),f(\widetilde\theta)) +
d(f(\widetilde\theta),\widetilde\theta) \leq 2\varepsilon +
d(f(\theta),f(\widetilde\theta)) ~.
    
\end{aligned}\]</span> This implies <span
class="math inline">\(d(f(\theta),f(\widetilde\theta)) &gt; 0\)</span>,
and <span class="math inline">\(f(\theta) \neq
f(\widetilde\theta)\)</span>. The map <span
class="math inline">\(f\)</span> is, therefore, one-to-one. We must then
have <span class="math inline">\(|D| \leq |N|\)</span>, as
desired. ◻</p>
</div>
<div id="eg:covering-number-bound-euclidean" class="example">
<p><strong>Example 7</strong>. We can explicitly bound the covering
number in some examples. In <span class="math inline">\(\mathbb
R^d\)</span>, let <span class="math inline">\(B^d_2\)</span> denote the
Euclidean ball with respect to the Euclidean distance. Clearly, for
<span class="math inline">\(\varepsilon \geq 1\)</span>, <span
class="math inline">\(N(\varepsilon, B^d_2, \lVert \cdot \rVert) =
1\)</span>: the singleton <span class="math inline">\(\{0\}\)</span>
constitutes the desired <span
class="math inline">\(\varepsilon\)</span>-cover.</p>
<p>For the case <span class="math inline">\(\varepsilon \in
(0,1)\)</span>, we appeal to the <em>volume argument</em> to construct
some desired bounds on the covering number. The rough heuristic is,
given a Euclidean ball, we can “overcover” and “underpack” the ball,
while being careful to keep balls disjoint when we “underpack”. When we
“overcover”, the sum of the volumes of these balls serve as an upper
bound for the volume of the Euclidean ball, thereby giving us a lower
bound on <span class="math inline">\(N(\varepsilon, B^d_2, \lVert \cdot
\rVert)\)</span>.</p>
<p>The formal descriptions are as follows. In the following, let <span
class="math inline">\(\lambda\)</span> denote the Lebesgue measure on
<span class="math inline">\(\mathbb R^d\)</span>. By an abuse of
notation again, writing <span class="math inline">\(D = D(2\varepsilon,
B^d_2, \lVert \cdot \rVert)\)</span>, suppose <span
class="math inline">\(\{\theta_1, \dots, \theta_D\}\)</span> is the
maximal <span class="math inline">\(2\varepsilon\)</span>-packing of
<span class="math inline">\(B^d_2\)</span>. Since <span
class="math inline">\(\lVert \theta - \widetilde\theta \rVert &gt;
2\varepsilon\)</span> for all <span class="math inline">\(\theta,
\widetilde\theta \in D\)</span> such that <span
class="math inline">\(\theta \neq \widetilde\theta\)</span>, the balls
<span class="math inline">\(\{B_\varepsilon (\theta) : \theta \in
D\}\)</span> must be disjoint. Meanwhile, it must be that <span
class="math inline">\(B_\varepsilon (\theta)\)</span> must be contained
in <span class="math inline">\(B_{1+\varepsilon}(0)\)</span> if <span
class="math inline">\(\theta \in B^d_2\)</span>. Therefore, we have the
inequality <span class="math display">\[\begin{aligned}
        \sum_{t \in D} \lambda(B_\varepsilon(t)) \leq \lambda
(B_{1+\varepsilon}(0)) ~.
    
\end{aligned}\]</span> By the scaling properties of the Lebesgue
measure, we have <span class="math inline">\(\lambda(B_\varepsilon (t))
= \varepsilon^d \lambda(B_1(0))\)</span>. As such, we must have <span
class="math display">\[\begin{aligned}
        |D| \leq
\frac{\lambda(B_{1+\varepsilon}(0))}{\lambda(B_\varepsilon (0))} =
\left( \frac{1+\varepsilon}{\varepsilon} \right)^d ~.
    
\end{aligned}\]</span> Because this holds for every <span
class="math inline">\(2\varepsilon\)</span>-packing, we’ve shown an
upper bound of <span class="math inline">\(\left( \frac{3}{2\varepsilon}
\right)^d\)</span> for <span class="math inline">\(\varepsilon &lt;
\frac12\)</span>. The lower bound follows from an analogous argument: if
<span class="math inline">\(N\)</span> is an <span
class="math inline">\(\varepsilon\)</span>-cover for <span
class="math inline">\(B^d_2\)</span>, then an identical argument via
properties of the Lebesgue measure means that we have <span
class="math display">\[\begin{aligned}
        |N| \geq \frac{\lambda(B^d_2)}{\lambda(B_\varepsilon(0))} =
\frac{1}{\varepsilon^d} ~.
    
\end{aligned}\]</span> Applying Lemma <a
href="#lem:covering-packing-comparisons" data-reference-type="ref"
data-reference="lem:covering-packing-comparisons">6</a>, this means we
have <span class="math display">\[\begin{aligned}
        \frac{1}{\varepsilon^d} \leq N(\varepsilon, B^d_2, \lVert \cdot
\rVert) \leq \left( \frac{3}{\varepsilon} \right)^d
    
\end{aligned}\]</span> for <span class="math inline">\(\varepsilon \in
(0,1)\)</span>.</p>
</div>
<div class="remark">
<p><strong>Remark 8</strong> (The failure of total boundedness in
function spaces). We take a brief detour to discuss how a function class
can be <em>bounded</em> but <em>not totally bounded</em>. Let <span
class="math inline">\(\mathscr C([0, 1], b)\)</span> denote the class of
all convex functions <span class="math inline">\(f\)</span> defined on
the unit interval such that <span class="math inline">\(\lVert  f
\rVert_\infty \leq b\)</span>. This class of functions is <em>not</em>
totally bounded under the sup-norm. To see this, define, for all <span
class="math inline">\(j \in \mathbb N\)</span>, functions <span
class="math inline">\(f_j : [0,1] \to [0,1]\)</span> that pass through
the coordinates <span class="math inline">\((1,0)\)</span>, <span
class="math inline">\((2^j, 0)\)</span>, and <span
class="math inline">\((0,1)\)</span>. It follows that for all <span
class="math inline">\(j\)</span>, <span class="math inline">\(\lVert f_j
- f_{j+1} \rVert_\infty \geq \frac12\)</span>, so because <span
class="math inline">\(f_j \geq f_{j+1}\)</span> for all <span
class="math inline">\(j\)</span>, we have <span
class="math inline">\(\lVert f_j - f_k \rVert_\infty \geq
\frac12\)</span> for all <span class="math inline">\(j,k \in \mathbb
N\)</span>. Note that <span class="math inline">\(f_j\)</span> is convex
for all <span class="math inline">\(j\)</span> and bounded in the
sup-norm, hence each <span class="math inline">\(f_j\)</span> is an
element of <span class="math inline">\(\mathscr C([0, 1], b)\)</span>.
However, <span class="math inline">\(\mathscr C([0, 1], b)\)</span> is
<em>not</em> totally bounded: if it were, <span
class="math inline">\(\mathscr C([0, 1], b)\)</span> could be covered by
a finite union of, say, <span
class="math inline">\(\frac18\)</span>-balls, in which case there exists
some <span class="math inline">\(\widetilde j, \widetilde k \in \mathbb
N\)</span> such that <span class="math inline">\(\lVert f_{\widetilde j}
- f_{\widetilde k} \rVert_\infty \leq \frac14\)</span>.</p>
</div>
<div class="example">
<p><strong>Example 9</strong> (Boolean hypercube). Let <span
class="math inline">\(\mathbb H^d = \{-1,1\}^d\)</span> denote the <span
class="math inline">\(d\)</span>-dimensional hypercube. Define the
<em>rescaled Hamming metric</em> <span
class="math display">\[\begin{aligned}
        d_H (\theta, \widetilde \theta) \triangleq \frac1d \sum_{1 \leq
i \leq d} \mathbb 1 \{ \theta_i \neq \widetilde \theta_i \} ~.
    
\end{aligned}\]</span> To derive an upper bound on the <span
class="math inline">\(\varepsilon\)</span>-covering number, construct
the set <span class="math inline">\(S = \{1, 2, \dots, \lceil
(1-\varepsilon)d \rceil\}\)</span>. Then, denote <span
class="math inline">\(U(\varepsilon) \triangleq \{\theta \in \mathbb H^d
: \theta_i = 0 \:\: \text{for all } i \notin S\}\)</span>. Therefore,
for any <span class="math inline">\(\theta \in \mathbb H^d\)</span>,
there exists a <span class="math inline">\(\widetilde \theta \in
U(\varepsilon)\)</span> such that <span class="math inline">\(d_H
(\theta, \widetilde \theta) \leq \varepsilon\)</span>. It then follows
that <span class="math display">\[\begin{aligned}
        \frac{\log N(\varepsilon, \mathbb H^d, d_H)}{\log 2} \leq \lceil
d(1-\varepsilon) \rceil ~.
    
\end{aligned}\]</span> A more precise argument is as follows: suppose
there is already an <span
class="math inline">\(\varepsilon\)</span>-packing. Then, <span
class="math inline">\(\frac{\varepsilon}{2}\)</span>-balls do not
intersect. Hence, the total number of elements in the union of those
balls is at most <span class="math inline">\(2^d\)</span>. By setting
<span class="math inline">\(\widetilde\varepsilon \triangleq \frac2d
\lfloor \frac{\varepsilon d}{2} \rfloor \leq \varepsilon\)</span>, we
have <span class="math display">\[\begin{aligned}
        D(\varepsilon, \mathbb H^d, d_H) \sum_{1 \leq i \leq
\widetilde\varepsilon d/2} \binom{d}{i} \le 2^d
    
\end{aligned}\]</span> which is true if and only if <span
class="math display">\[\begin{aligned}
        \log D(\varepsilon, \mathbb H^d, d_H)
        \leq - \log \sum_{1 \leq i \leq \widetilde\varepsilon
d/2}  \binom{d}{i} 2^{-d}
        = - \log \mathbf P\,\,\!\!(Z_d \le \tfrac12
\widetilde\varepsilon d) ~,
    
\end{aligned}\]</span> where <span class="math inline">\(Z_d\)</span> is
the sum of <span class="math inline">\(d\)</span> many <span
class="math inline">\(\operatorname{Ber}(\frac12)\)</span> random
variables. It then follows from the lower bound on binomial tails that
<span class="math display">\[\begin{aligned}
        \frac1d \log D(\varepsilon, \mathbb H^d, d_H) \le
\operatorname{KL} \left( \frac{\widetilde\varepsilon}{2}, \frac12
\right) + \frac1d \log(d + 1) ~,
    
\end{aligned}\]</span> where <span
class="math display">\[\begin{aligned}
       \operatorname{KL} \left( \frac{\varepsilon}{2}, \frac12
\right)  \triangleq  \varepsilon \log \frac{{\varepsilon}/{2}}{1/2} +
\left( 1 - \frac{\varepsilon}{2} \right) \log \frac{1 -
{\varepsilon}/{2}}{{1}/{2}}
    
\end{aligned}\]</span> is the Kullback-Leibler divergence between
Bernoulli distributions with parameter <span
class="math inline">\(\frac{\varepsilon}{2}\)</span> and <span
class="math inline">\(\frac12\)</span>.</p>
</div>
<p>The following result is derived using the arguments of the
<em>Varshamov-Gilbert lemma</em>.</p>
<div id="lem:gv-bound-extension" class="lemma">
<p><strong>Lemma 10</strong>. Let <span class="math inline">\(d \in
\mathbb N\)</span> and let <span class="math inline">\(s \in 2 \mathbb
N\)</span>. Let <span class="math inline">\(D = D(\frac{s}{2}, U,
d_H)\)</span> be the <span
class="math inline">\(\frac{s}{2}\)</span>-packing number of <span
class="math inline">\(U \triangleq \{ u \in \{1, \dots, N\}^d : \lVert u
\rVert_0 = s\}\)</span> for some <span class="math inline">\(N \in
\mathbb N\)</span> with respect to the rescaled Hamming distance <span
class="math inline">\(d_H\)</span>. Then, if <span
class="math inline">\(s \leq \frac{Nd}{25}\)</span> and <span
class="math inline">\(N \geq 2\)</span>, then <span
class="math display">\[\begin{aligned}
        \log D \geq \frac{s}{64} \log \frac{Nd}{s} ~.
    
\end{aligned}\]</span> As a consequence, if <span
class="math inline">\(s \leq \frac{d}{8}\)</span> and <span
class="math inline">\(N = 3\)</span>, then <span
class="math display">\[\begin{aligned}
        \log D \geq \frac{s}{64} \log \frac{ed}{s} ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> Note that the cardinality of the <span
class="math inline">\(\frac{s}{2}\)</span>-Hamming ball centred at some
<span class="math inline">\(u \in U\)</span> is bounded above by <span
class="math inline">\(\binom{d}{s/2} N^{s/2}\)</span>. Of the <span
class="math inline">\(d\)</span> coordinates, fix <span
class="math inline">\(d-\frac{s}{2}\)</span> coordinates. Therefore, if
<span class="math inline">\(D \binom{d}{s/2} N^{s/2} &lt; |U| =
\binom{d}{s} (N - 1)^s\)</span>, then there exists an element <span
class="math inline">\(v \in U\)</span> which is at most Hamming distance
<span class="math inline">\(\frac{s}{2}\)</span> from all elements in
the packing. This process can be iterated until <span
class="math display">\[\begin{aligned}
        D \binom{d}{s/2} N^{s/2} \ge \binom{d}{s} (N - 1)^s ~,
    
\end{aligned}\]</span> in other words, <span
class="math display">\[\begin{aligned}
        D \ge \frac{\binom{d}{s}}{\binom{d}{s/2}} \frac{(N -
1)^{d}}{N^{s/2}} \overset{\text{(i)}}{\ge}
        \left(\frac{d}{2es}\right)^{s/2} N^{s/2}
\left(\frac{N-1}N\right)^s ~,
    
\end{aligned}\]</span> where (i) follows from Stirling’s approximation.
Therefore, <span class="math display">\[\begin{aligned}
        \log D \ge \frac{s}{2} \log \frac{Nd}{s} \frac{((N- 1)/
N)^2}{2e}
        \overset{\text{(ii)}}{\ge} \frac{s}{2}
\log  \frac{Nd}{s}\frac{1}{8e}
        \overset{\text{(iii)}}{\ge} \frac{s}{64} \log \frac{Nd}{s} ~,
    
\end{aligned}\]</span> where (ii) follows if <span
class="math inline">\(N \geq 2\)</span>, and (iii) follows if <span
class="math inline">\(s \leq \frac{Nd}{25}\)</span>. The additional
conseuqence follows from inspection of the same string of
inequalities. ◻</p>
</div>
<h2 id="maximal-inequalities-via-concentration">Maximal Inequalities via
Concentration</h2>
<h4 id="random-variables">Random variables</h4>
<p>As we did in the discussion of concentration inequalities of random
variables, consider a sequence of random variables <span
class="math inline">\(X_1, \dots, X_n\)</span>, which neither need to be
independent nor identically distributed. We are interested in the
behaviour of the supremum of these random variables. For a start,
consider the finite case, and suppose we know <span
class="math inline">\(\mathbb E |X_i|^p &lt; \infty\)</span> for some
<span class="math inline">\(p \geq 1\)</span> and for all <span
class="math inline">\(i\)</span>. Then, Hölder’s inequality tells us
<span class="math display">\[\begin{aligned}
    \mathbb E \sup_{1 \leq i \leq n} |X_i| &amp;\leq \left( \mathbb E
\sup_{1 \leq i \leq n} |X_i|^p \right)^{\frac1p} \leq \left( \mathbb E
\sum_{1 \leq i \leq n} |X_i|^p \right)^{\frac1p} ~.
\end{aligned}\]</span> But this bound is not good enough for most
purposes; the rightmost term can be very large. To this end, we have
seen Proposition <a href="{% post_url 2026-06-15-fundamental-techniques %}#prop:strictly-increasing-maximal-inequality"
data-reference-type="ref"
data-reference="prop:strictly-increasing-maximal-inequality">[prop:strictly-increasing-maximal-inequality]</a>,
which allows us to understand the supremum of random variables when we
have a property based on an increasing function available to us. The
following result adapts Proposition <a
href="{% post_url 2026-06-15-fundamental-techniques %}#prop:strictly-increasing-maximal-inequality"
data-reference-type="ref"
data-reference="prop:strictly-increasing-maximal-inequality">[prop:strictly-increasing-maximal-inequality]</a>
slightly.</p>
<div id="lem:orlicz-maximal-ineqaulity" class="lemma">
<p><strong>Lemma 11</strong> (Orlicz). For all <span
class="math inline">\(i\)</span>, suppose <span
class="math inline">\(\mathbf P\,\,\!\!(|X_i| &gt; t) \leq K e^{-D
t^p}\)</span> for some <span class="math inline">\(K, D &gt; 0\)</span>
and <span class="math inline">\(p \geq 1\)</span>. Let <span
class="math inline">\(\psi_p (z) = e^{z^p} - 1\)</span>. Then, <span
class="math display">\[\begin{aligned}
        \mathbb E \psi_p \left( \frac{|X_i|}{C_i} \right) \leq 1 ~,
    
\end{aligned}\]</span> where <span class="math inline">\(C_i =
(\frac{1+K_i}{D_i})^{\frac1p}\)</span>. From this, we have <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{1 \leq i \leq n} |X_i| \leq \max_{1 \leq i \leq
n} \left( \frac{1+K_i}{D_i} \right)^{\frac1p} (\log(1+m))^{\frac1p} ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> By direct calculations, <span
class="math display">\[\begin{aligned}
        \mathbb E [ e^{\frac{|X|^p}{C^p} - 1} ] &amp;= \mathbb E \left[
\int_0^{\frac{|X|^p}{C^p}} e^t \mathrm{d} t \right] = \mathbb E \left[
\int_0^\infty e^t \mathbb 1 \{ |X| &gt; C t^{\frac1p} \} \mathrm{d} t \right]
\\
        &amp;= \int_0^\infty e^t \mathbf P\,\,\!\!(|X| &gt; C
t^{\frac1p}) \mathrm{d} t \leq \int_0^\infty K e^{(1-DC^p)t} \mathrm{d} t =
\frac{K}{D C^p - 1} ~,
    
\end{aligned}\]</span> from which we can conclude directly. ◻</p>
</div>
<div id="lem:conseqeunce-orlicz-maximal-inequality" class="lemma">
<p><strong>Lemma 12</strong>. Let <span class="math inline">\(X_1,
\dots, X_n\)</span> be random variables satisfying the condition <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(|X_i| &gt; z) \leq 2 e^{-\frac{z^2}{2(az+b)}}
    
\end{aligned}\]</span> for some constants <span
class="math inline">\(a,b\)</span> and for all <span
class="math inline">\(z\)</span>. Then, <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{1 \leq i \leq n} |X_i| \lesssim a \log(1+m) +
\sqrt{b \log(1+m)} ~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> Truncating the random variable at <span
class="math inline">\(t = \frac{b}{a}\)</span>. Observe that for all
<span class="math inline">\(\widetilde t \leq t\)</span>, we must have
<span class="math inline">\(\mathbf P\,\,\!\!(|X_i| &gt; \widetilde t)
\leq 2 e^{-\frac{\widetilde t^2}{4b}}\)</span>; otherwise, we must have
<span class="math inline">\(\mathbf P\,\,\!\!(|X_i| &gt; \widetilde t)
\leq 2 e^{-\frac{\widetilde t}{4a}}\)</span>. Combining this with <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{1 \leq i \leq n} |X_i| \leq \mathbb E \left[
\sup_{1 \leq i \leq n} |X_i| \mathbb 1 \left\{ |X_i| \leq \frac{b}{a}
\right\} \right] + \mathbb E \left[ \sup_{1 \leq i \leq n} |X_i| \mathbb
1 \left\{ |X_i| &gt; \frac{b}{a} \right\} \right] ~,
    
\end{aligned}\]</span> we arrive at the desired conclusion. ◻</p>
</div>
<h4 id="sochastic-processes">Sochastic processes</h4>
<p>Separate from the ideas above, we can develop tools to understand the
supremum of a random process. For a set <span
class="math inline">\(T\)</span>, we can always write <span
class="math display">\[\begin{aligned}
    \mathbb E \sup_{t \in T} \: X_t \leq |T| \sup_{t \in T} \: \mathbb E
|X_t|
\end{aligned}\]</span> for random variables <span
class="math inline">\(\{X_t\}_{t \in T}\)</span>. Here, let’s say the
set <span class="math inline">\(T\)</span> is finite. It turns out this
bound, while it can look too crude at first, can be suitably modified to
be turned into a useful inequality. We can do so by leveraging the
Chernoff bound. The following discussion expands on Proposition <a
href="{% post_url 2026-06-15-fundamental-techniques %}#prop:subgaussian-maximal-inequality" data-reference-type="ref"
data-reference="prop:subgaussian-maximal-inequality">[prop:subgaussian-maximal-inequality]</a>,
which should be seen as a special case of the following result.</p>
<div id="prop:maximal-inequality-chernoff" class="proposition">
<p><strong>Proposition 13</strong> (Maximal inequality). Let <span
class="math inline">\(\psi\)</span> be a convex function such that <span
class="math inline">\(\psi(0)=\psi&#39;(0)=0\)</span>. Assume <span
class="math inline">\(\log \mathbb E e^{\lambda X_t} \leq
\psi(\lambda)\)</span> for all <span class="math inline">\(\lambda \geq
0\)</span> and <span class="math inline">\(t \in T\)</span>. Then, <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{t \in T} \: X_t \leq (\psi^*)^{-1} (\log |T|) ~,
    
\end{aligned}\]</span> where <span class="math inline">\(\psi^*\)</span>
denotes the Legendre transform of <span
class="math inline">\(\psi\)</span>.</p>
</div>
<div class="proof">
<p><em>Proof.</em> This follows from an application of Jensen’s
inequality, namely— <span class="math display">\[\begin{aligned}
        \mathbb E \sup_{t \in T} \: X_t \leq \frac{1}{\lambda} \log
\mathbb E e^{\lambda \sup_{x \in T} X_t} \leq \frac{\log |T| +
\psi(\lambda)}{\lambda}
    
\end{aligned}\]</span> for any <span class="math inline">\(\lambda &gt;
0\)</span>. We can now optimize over <span
class="math inline">\(\lambda\)</span> on both sides; but, because the
leftmost expression is independent of <span
class="math inline">\(\lambda\)</span>, we only need to optimize the
right-hand side. A formal calculation shows <span
class="math display">\[\begin{aligned}
        \inf_{\lambda &gt; 0} \frac{\log |T| + \psi(\lambda)}{\lambda} =
(\psi^*)^{-1} (\log |T|) ~.
    
\end{aligned}\]</span> We need to show <span
class="math inline">\(\psi^*\)</span> is invertible for this definition
to make sense. Since <span class="math inline">\(\psi^*\)</span> is the
supremum of linear functions, it follows that the map <span
class="math inline">\(x \mapsto \psi^*(x)\)</span> is convex, and
strictly increasing. The only exceptions occur at the values of <span
class="math inline">\(x\)</span> where the maximum of the argument in
the definition of <span class="math inline">\(\psi^*\)</span> is
attained at <span class="math inline">\(\lambda = 0\)</span>. This means
when <span class="math inline">\(\lambda x - \psi(\lambda) \leq
-\psi(0)\)</span> for all <span class="math inline">\(\lambda \geq
0\)</span>. By convexity, this occurs if and only if <span
class="math inline">\(x \leq \psi&#39;(0) = 0\)</span>, where the
equality follows from assumption. Because <span
class="math inline">\(\psi^*(0)=0\)</span>, it follows that <span
class="math inline">\(x \mapsto \psi^*(x)\)</span> must be convex,
strictly increasing, and nonnegative for any <span
class="math inline">\(x \geq 0\)</span>. This implies <span
class="math inline">\(\psi^*\)</span> is invertible (i.e. has a
well-defined inverse) for all <span class="math inline">\(x \geq
0\)</span>.</p>
<p>Since <span class="math inline">\(\psi^*\)</span> is invertible, it
follows from the definition that, because <span
class="math inline">\(\frac{\lambda x - \psi(\lambda)}{\lambda} \geq
x\)</span> for any <span class="math inline">\(\lambda &gt; 0\)</span>,
the inequality in the expression above is attained when <span
class="math inline">\(\lambda\)</span> is the argmax of <span
class="math inline">\(\psi^*\)</span>. This concludes the proof. ◻</p>
</div>
<p>The maximal inequality due to the Chernoff bound immediately gives us
the following.</p>
<div class="corollary">
<p><strong>Corollary 14</strong>. Let <span
class="math inline">\(\psi\)</span> be a convex function with <span
class="math inline">\(\psi(0)=\psi&#39;(0)=0\)</span>. Assume <span
class="math inline">\(\log \mathbb E e^{\lambda X_t} \leq
\psi(\lambda)\)</span> for all <span class="math inline">\(\lambda \geq
0\)</span> and <span class="math inline">\(t \in T\)</span>. Then, <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( \sup_{t \in T} \: X_t \geq (\psi^*)^{-1}
(\log |T| + \eta) \right) \leq e^{-\eta} ~~\text{for all } \eta \geq 0
~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> Since <span class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( \sup_{t \in T} \: X_t \geq x \right)
\leq \sum_{t \in T} \mathbf P\,\,\!\!(X_t \geq x) \leq e^{\log|T| -
\psi^*(x)} ~,
    
\end{aligned}\]</span> by setting <span class="math inline">\(\eta =
\psi^*(x) - \log|T|\)</span>, we arrive at the desired conclusion. ◻</p>
</div>
<div class="remark">
<p><strong>Remark 15</strong>. If <span class="math inline">\(\{X_t\}_{t
\in T}\)</span> are independent random variables, then these bounds are
“good”, in the sense that they are essentially sharp.</p>
</div>
<p>In general, absent any assumptions, the maximal inequalities above
present trivial bounds on the behaviour of the supremum of random
variables. Furthermore, for general stochastic processes, calculating
<span class="math inline">\(\mathbb E \sup_{t \in T} \: X_t\)</span> is
<em>very</em> nontrivial. In a special case, such as when <span
class="math inline">\(\{X_t\}_{t \in T}\)</span> is a standard Brownian
motion, then the reflection principle tells us <span
class="math inline">\(\mathbb E \sup_{1 \leq t \leq \overline t}X_t =
\sqrt{\frac{2 \overline t}{\pi}}\)</span> for every <span
class="math inline">\(\overline t &gt; 0\)</span>. So, we generally
investigate the problem of <em>bounding</em> the expectation of the
supremum of a stochastic process. To begin making some progress, we can
appeal to a straightforward restriction on the collection <span
class="math inline">\(\{X_t\}_{t \in T}\)</span>, called the
<em>Lipschitz property</em>. We say a random process <span
class="math inline">\(\{X_t\}_{t \in T}\)</span> is <em>Lipschitz</em>
for a metric <span class="math inline">\(d\)</span> on <span
class="math inline">\(T\)</span> if there exists a random variable <span
class="math inline">\(C\)</span> such that <span
class="math display">\[\begin{aligned}
    |X_t - X_s| \leq C d(t,s) ~~\text{for all } s,t \in T ~.
\end{aligned}\]</span> From the definition of Lipschitz random process
and the definitions above, we immediately conclude the following maximal
inequality.</p>
<div class="lemma">
<p><strong>Lemma 16</strong>. Assume the random process <span
class="math inline">\(\{X_t\}_{t \in T}\)</span> is Lipschitz, and <span
class="math inline">\(X_t\)</span> is subgaussian with <span
class="math inline">\(\ell = \sigma^2\)</span>. Then, <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{t \in T} \: X_t \leq \inf_{\eta &gt; 0} \eta
\mathbb E C + \sqrt{2\sigma^2 \log N(\eta, T, d)} ~.
    
\end{aligned}\]</span></p>
</div>
<p>We can then build on these tools if we wish to relax the requirement
of the Lipschitz process. Specifically, in practical scenarios, the
increments <span class="math inline">\(|X_t - X_s|\)</span> are
fluctuating for all pairs <span class="math inline">\(s,t\)</span>, with
some (or most) being smaller than that in the worst-case scenario. If we
can exert tighter control over these increments, then we have hope to
improve the maximal inequalities, as above.</p>
<h2 id="stochastic-equicontinuity">Stochastic Equicontinuity</h2>
<p>Analyses of statistical procedures can rely heavily on Taylor’s
theorem and regularity conditions. For example, maximum likelihood
estimation relies on maximizing random criterion functions: if <span
class="math inline">\(X_1, \dots, X_n\)</span> are independent draws
from a distribution <span class="math inline">\(\mathbf
P\,\,\!\!\)</span> (admitting a family of density functions <span
class="math inline">\(\{p(\cdot,\theta)\}\)</span>), then the true and
unknown parameter <span class="math inline">\(\theta_0\)</span> can be
estimated by finding the argmax of <span class="math inline">\(G_n
(\theta) = \frac1n \sum_{1 \leq i \leq n} \ln
p(X_i,\theta)\)</span>.</p>
<p>To see how such an analysis turns out, let us write <span
class="math inline">\(g_0 (\cdot,\theta) = \ln p(\cdot,
\theta)\)</span>, and <span class="math inline">\(g_i
(\cdot,\theta)\)</span> be the <span class="math inline">\(i\)</span>th
derivative of <span class="math inline">\(g_0\)</span> for <span
class="math inline">\(i = 1,2,3\)</span>. Taylor’s theorem implies <span
class="math display">\[\begin{aligned}
    g_0(\cdot, \theta) = g_0(\cdot, \theta_0) + g_1(\cdot, \theta_0)
(\theta-\theta_0) + \frac{g_2(\cdot, \theta_0)}{2} (\theta-\theta_0)^2 +
\frac{g_3(\cdot, \theta^*)}{6} (\theta-\theta_0)^3 ~.
\end{aligned}\]</span> Here, <span
class="math inline">\(\theta^*\)</span> lies between <span
class="math inline">\(\theta\)</span> and <span
class="math inline">\(\theta_0\)</span>. Integrating with respect to the
empirical measure over <span
class="math inline">\(X_1,\dots,X_n\)</span>, denoted <span
class="math inline">\(\widehat P_n\)</span>, implies <span
class="math display">\[\begin{aligned}
    G_n(\theta) = G_n(\theta_0) + (\theta-\theta_0) \widehat P_n g_1 +
\frac{(\theta-\theta_0)^2}{2} \widehat P_n g_2 + R_n (\theta) ~,
\end{aligned}\]</span> where <span
class="math inline">\(R_n(\theta)\)</span> is a remainder term. Imposing
enough regularity conditions on <span
class="math inline">\(|g_3(\cdot,\theta)|\)</span>, we can lump the last
term into the quadratic term and obtain <span
class="math display">\[\begin{aligned}
    G_n(\theta) = G_n(\theta_0) + (\theta-\theta_0) \widehat P_n g_1 +
\frac{(\theta-\theta_0)^2}{2} \widehat P_n (g_2 + o_{\mathbf P\,\,\!\!}
(1)) ~.
\end{aligned}\]</span> So, imposing <span class="math inline">\(P g_2
&lt; \infty\)</span> implies we can hope to attain a central limit
theorem result. This means we need conditions that deal with the
remainder term.</p>
<div id="def:stochastic-equicontinuity" class="definition">
<p><strong>Definition 17</strong>. Let <span
class="math inline">\((T,d)\)</span> be a pseudo metric space where
<span class="math inline">\(d\)</span> is a semimetric. Let <span
class="math inline">\(\{Z_n(t): t \in T\}\)</span> be a stochastic
process. We say <span class="math inline">\(\{Z_n\}\)</span> is
<strong>stochastically equicontinuous at <span
class="math inline">\(t_0\)</span></strong> if, for each <span
class="math inline">\(\eta &gt; 0\)</span> and <span
class="math inline">\(\varepsilon &gt; 0\)</span>, there exists a
neighbourhood <span class="math inline">\(U\)</span> of <span
class="math inline">\(t_0\)</span> where <span
class="math display">\[\begin{aligned}
        \limsup_{n \to \infty} \mathbf P\,\,\!\!\left( \sup_U |Z_n(t) -
Z_n(t_0)| &gt; \eta \right) &lt; \varepsilon ~.
    
\end{aligned}\]</span></p>
</div>
<p>Stochastic equicontinuity is useful for the following reasons.
Suppose we study <span class="math inline">\(\mathcal F = \{f(\cdot,t):
t \in T\}\)</span>, <span class="math inline">\(T \subset \mathbb
R^k\)</span>, where <span class="math inline">\(f\)</span> is <span
class="math inline">\(\mathbf P\,\,\!\!\)</span>-integrable functions on
the set <span class="math inline">\(S\)</span> where <span
class="math inline">\(\mathbf P\,\,\!\!\)</span> lives. Let <span
class="math inline">\(P_n\)</span> be the empirical measure formed from
<span class="math inline">\(n\)</span> independent observations drawn
from <span class="math inline">\(\mathbf P\,\,\!\!\)</span>. Let the
empirical process be written as <span class="math inline">\(\mathbb G_n
(f) = \sqrt n(\widehat P_n - \mathbf P\,\,\!\!) (f)\)</span> as applied
to <span class="math inline">\(f \in \mathcal F\)</span>. Write <span
class="math inline">\(F(t) = \mathbf P\,\,\!\!f(\cdot, t)\)</span> and
<span class="math inline">\(F_n(t) = \widehat P_n f(\cdot,t)\)</span>.
It will be shown that if we want to minimize <span
class="math inline">\(\{F_n(\cdot)\}\)</span>, then we can study a
suitable sequence <span class="math inline">\(\{\tau_n\} \subset
T\)</span> that actually comes close to minimizing the family of
functions. To proceed with showing this, we can write <span class="math display">\begin{equation}\label{eq:linear-approximation-f-t}\begin{aligned}

    f(\cdot, t) = f(\cdot, t_0) + (t-t_0)&#39; \Delta(\cdot) + |t-t_0|
r(\cdot,t) ~,
\end{aligned}\end{equation}</span> where <span
class="math inline">\(\Delta(\cdot)\)</span> is a vector of <span
class="math inline">\(k\)</span> real functions defined on <span
class="math inline">\(S\)</span> and <span
class="math inline">\(r(\cdot,t_0) = 0\)</span>. We may want to impose
various “size” cosntraints for <span
class="math inline">\(r(\cdot,t)\)</span> and therefore <span
class="math inline">\(f(\cdot,t)\)</span>. In particular, a sensible
definition is <span class="math inline">\(\mathbf
P\,\,\!\!|r(\cdot,t)|^2 \xrightarrow{t \to t_0} 0\)</span>, so that
<span class="math inline">\(f(\cdot,t)\)</span> is differentiable in
quadratic mean. We can work with <span class="math inline">\(L^2(\mathbf
P\,\,\!\!)\)</span> directly, consider a seminorm <span
class="math inline">\(\rho_P\)</span> on it, and focus our attention on
the set <span class="math inline">\(\mathcal R =
\{r(\cdot,t)\}\)</span>. So, the stochastic equicontinuity condition of
<span class="math inline">\(\{\mathbb G_n r(\cdot,t)\}\)</span> boils
down to: for <span class="math inline">\(\varepsilon &gt; 0\)</span>,
<span class="math inline">\(\eta &gt; 0\)</span>, there exists a
neighbourhood <span class="math inline">\(V \subset \mathcal R\)</span>
such that <span class="math inline">\(\limsup_{n \to \infty} \mathbf
P\,\,\!\!(\sup_V |\mathbb G_n r| &gt; \eta) &lt; \varepsilon\)</span>,
i.e. <span class="math inline">\(V = \{r \in \mathcal R:  \rho_P(r) \leq
\delta\}\)</span> for some <span class="math inline">\(\delta &gt;
0\)</span>.</p>
<div class="remark">
<p><strong>Remark 18</strong>. Differentiability in quadratic mean for
<span class="math inline">\(\mathbb G_n r\)</span> implies <span
class="math inline">\(P \Delta = 0\)</span>, because if not, then
integrating the linearization of <span class="math inline">\(f(\cdot,
t)\)</span> implies <span class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!f(\cdot, t) = \mathbf P\,\,\!\!f(\cdot, t_0) +
(t-t_0)&#39; \mathbf P\,\,\!\!\Delta(\cdot) + o(|t-t_0|) ~, \quad t
\approx t_0
    
\end{aligned}\]</span> which contradicts the existence of a (local)
minimium at <span class="math inline">\(t_0\)</span>.</p>
</div>
<div id="thm:tau-n-stochastic-equicontinuity" class="theorem">
<p><strong>Theorem 19</strong>. Let <span
class="math inline">\(\{\tau_n\}\)</span> be a sequence of random
vectors converging in probability to <span
class="math inline">\(t_0\)</span> where <span
class="math inline">\(F(t_0)\)</span> is the minimum in the function
class considered. Let <span class="math inline">\(r(\cdot,t)\)</span>
and <span class="math inline">\(\Delta(\cdot)\)</span> be the functions
defined in the linear approximation \eqref{eq:linear-approximation-f-t}.
Suppose the following conditions hold.</p>
<ol>
<li><p><span class="math inline">\(t_0 \in T^\circ\)</span>.</p></li>
<li><p><span class="math inline">\(F(\cdot)\)</span> has an invertible
Hessian matrix <span class="math inline">\(V\)</span> at <span
class="math inline">\(t_0\)</span>.</p></li>
<li><p><span class="math inline">\(F(\tau_n) = o_{\mathbf P\,\,\!\!}
(n^{-1}) + \inf_t F_n(t)\)</span>.</p></li>
<li><p>The components of <span
class="math inline">\(\Delta(\cdot)\)</span> are all elements of <span
class="math inline">\(L^2(\mathbf P\,\,\!\!)\)</span>.</p></li>
<li><p>The sequence <span class="math inline">\(\{\mathbb G_n
r(\cdot,t)\}\)</span> is stochastic equicontinuous at <span
class="math inline">\(t_0\)</span>.</p></li>
</ol>
<p>Then, <span class="math inline">\(\sqrt n (\tau_n - t_0)
\xrightarrow{d} \mathcal N(0,V^{-1} (\mathbf P\,\,\!\!(\Delta
\Delta&#39;) - (\mathbf P\,\,\!\!\Delta)(\mathbf
P\,\,\!\!\Delta)&#39;)V^{-1})\)</span>.</p>
</div>
<p>The proof of this theorem is in <span class="citation"
data-cites="pollard_convergence_1984"></span>. In many developments of
asymptotic distribution theory, stochastic equicontinuity plays a
critical role in making sure that the desired limiting expressions for
<span class="math inline">\(F_n\)</span> can be attained.</p>
<div class="proof">
<p><em>Proof of Theorem <a href="#thm:tau-n-stochastic-equicontinuity"
data-reference-type="ref"
data-reference="thm:tau-n-stochastic-equicontinuity">19</a>.</em> Write
<span class="math inline">\(P g = \int g \, dP\)</span>, <span
class="math inline">\(P_n g = \frac1n\sum_{i=1}^n g(X_i)\)</span>, and
<span class="math inline">\(\mathbb G_n g = \sqrt n (P_n-P)g\)</span>.
For <span class="math inline">\(t\in T\)</span> write <span
class="math inline">\(f_t(\cdot)=f(\cdot,t)\)</span> and <span
class="math inline">\(r_t(\cdot)=r(\cdot,t)\)</span>.</p>
<p><strong>Step 1 (first-order condition and positivity).</strong>
Because <span class="math inline">\(t_0\in T^\circ\)</span> and <span
class="math inline">\(t_0\)</span> is a (local) minimizer of the
differentiable map <span class="math inline">\(t\mapsto F(t)=P
f_t\)</span>, we have <span class="math inline">\(\nabla
F(t_0)=0\)</span>. Integrating the linear approximation \eqref{eq:linear-approximation-f-t}
gives, for <span class="math inline">\(t\)</span> near <span
class="math inline">\(t_0\)</span>, <span class="math display">\begin{equation}\label{eq:F-linearized}\begin{aligned}
F(t)-F(t_0)
&amp;= P(f_t-f_{t_0})
= (t-t_0)&#39; P\Delta + |t-t_0| \, P r_t . 
\end{aligned}\end{equation}</span> If (as is standard under quadratic-mean
differentiability) <span class="math inline">\(P|r_t|\to 0\)</span> as
<span class="math inline">\(t\to t_0\)</span>, then dividing \eqref{eq:F-linearized} by <span
class="math inline">\(|t-t_0|\)</span> and letting <span
class="math inline">\(t\to t_0\)</span> yields <span
class="math display">\[\lim_{t\to t_0}\frac{F(t)-F(t_0)}{|t-t_0|}
= \lim_{t\to t_0} \frac{(t-t_0)&#39;}{|t-t_0|} P\Delta
= \sup_{\|u\|=1} u&#39;P\Delta .\]</span> But <span
class="math inline">\(t_0\)</span> is a local minimizer, so the
directional derivative must be <span class="math inline">\(0\)</span> in
every direction; hence <span class="math display">\begin{equation}\label{eq:PDelta0}\begin{aligned}
P\Delta = 0. 
\end{aligned}\end{equation}</span> Assumption (2) gives that the Hessian matrix
<span class="math inline">\(V=\nabla^2 F(t_0)\)</span> exists and is
invertible. Since <span class="math inline">\(t_0\)</span> is a local
minimizer, <span class="math inline">\(V\)</span> must be symmetric
positive definite; denote <span class="math display">\[\lambda_{\min}
\equiv \lambda_{\min}(V)&gt;0.\]</span></p>
<p><strong>Step 2 (second-order expansion of <span
class="math inline">\(F\)</span> and a quadratic lower bound).</strong>
By twice differentiability of <span class="math inline">\(F\)</span> at
<span class="math inline">\(t_0\)</span>, <span class="math display">\begin{equation}\label{eq:F-Taylor}\begin{aligned}
F(t_0+u) = F(t_0) + \nabla F(t_0)&#39;u + \frac12 u&#39;Vu + o(\|u\|^2)
= F(t_0) + \frac12 u&#39;Vu + o(\|u\|^2). 
\end{aligned}\end{equation}</span> Therefore there exists <span
class="math inline">\(\delta_0&gt;0\)</span> such that whenever <span
class="math inline">\(\|u\|\le \delta_0\)</span>, <span class="math display">\begin{equation}\label{eq:quad-lower}\begin{aligned}
\left|o(\|u\|^2)\right| \le \frac{\lambda_{\min}}{4}\|u\|^2,
\qquad\text{hence}\qquad
F(t_0+u)-F(t_0) \ge \frac{\lambda_{\min}}{4}\|u\|^2.

\end{aligned}\end{equation}</span></p>
<p><strong>Step 3 (local expansion of <span
class="math inline">\(F_n\)</span> on <span
class="math inline">\(n^{-1/2}\)</span>-scales).</strong> For <span
class="math inline">\(h\in\mathbb R^k\)</span> define <span
class="math inline">\(t_{n,h}\equiv t_0+h/\sqrt n\)</span> (which lies
in <span class="math inline">\(T\)</span> for all large <span
class="math inline">\(n\)</span> because <span
class="math inline">\(t_0\in T^\circ\)</span>). Consider the local
criterion <span class="math display">\[Q_n(h)\ \equiv\
n\left(F_n(t_{n,h})-F_n(t_0)\right)
\quad\text{where}\quad
F_n(t)=P_n f_t.\]</span> Decompose <span class="math display">\begin{equation}\label{eq:Qn-decomp}\begin{aligned}
Q_n(h)
&amp;= n\left(F(t_{n,h})-F(t_0)\right)
+ n\left[(F_n-F)(t_{n,h})-(F_n-F)(t_0)\right]. 
\end{aligned}\end{equation}</span> For the deterministic part, set <span
class="math inline">\(u=h/\sqrt n\)</span> in \eqref{eq:F-Taylor} to get <span class="math display">\begin{equation}\label{eq:det-part}\begin{aligned}
n\left(F(t_{n,h})-F(t_0)\right)
= \frac12 h&#39;Vh + o(\|h\|^2)\cdot \frac1n \cdot n
= \frac12 h&#39;Vh + o(1), 
\end{aligned}\end{equation}</span> uniformly over <span
class="math inline">\(\|h\|\le M\)</span> for each fixed <span
class="math inline">\(M\)</span>.</p>
<p>For the stochastic part, use \eqref{eq:linear-approximation-f-t}:
<span class="math display">\[f_{t_{n,h}}-f_{t_0}
= (t_{n,h}-t_0)&#39;\Delta + |t_{n,h}-t_0|\, r_{t_{n,h}}
= \frac1{\sqrt n} h&#39;\Delta + \frac{\|h\|}{\sqrt n}\,
r_{t_{n,h}}.\]</span> Hence <span class="math display">\begin{equation}\label{eq:stoch-part}\begin{aligned}
n\left[(F_n-F)(t_{n,h})-(F_n-F)(t_0)\right]
&amp;= n(P_n-P)\left(f_{t_{n,h}}-f_{t_0}\right) \notag\\
&amp;= \sqrt n\, h&#39;(P_n-P)\Delta + \|h\|\,\sqrt n\,(P_n-P)
r_{t_{n,h}} \notag\\
&amp;= h&#39;\,\mathbb G_n\Delta + \|h\|\, \mathbb G_n r_{t_{n,h}}.

\end{aligned}\end{equation}</span></p>
<p><strong>Step 4 (use stochastic equicontinuity to kill the remainder
term).</strong> By assumption (5), <span class="math inline">\(\{\mathbb
G_n r_t: t\in T\}\)</span> is stochastically equicontinuous at <span
class="math inline">\(t_0\)</span>. Because <span
class="math inline">\(r_{t_0}\equiv 0\)</span>, we have <span
class="math inline">\(\mathbb G_n r_{t_0}=0\)</span> for every <span
class="math inline">\(n\)</span>. Therefore, for any fixed <span
class="math inline">\(\eta,\varepsilon&gt;0\)</span>, there exists a
neighborhood <span class="math inline">\(U\)</span> of <span
class="math inline">\(t_0\)</span> such that <span
class="math display">\[\limsup_{n\to\infty}\mathbf
P\,\,\!\!\Big(\sup_{t\in U}|\mathbb G_n
r_t|&gt;\eta\Big)&lt;\varepsilon.\]</span> Fix <span
class="math inline">\(M&lt;\infty\)</span> and choose <span
class="math inline">\(U\)</span> so small that <span
class="math inline">\(t_{n,h}\in U\)</span> for all <span
class="math inline">\(\|h\|\le M\)</span> and all large <span
class="math inline">\(n\)</span>. Then <span class="math display">\begin{equation}\label{eq:Gr-unif-op1}\begin{aligned}
\sup_{\|h\|\le M} |\mathbb G_n r_{t_{n,h}}| \ \xrightarrow{p}\ 0,

\end{aligned}\end{equation}</span> and consequently, <span class="math display">\begin{equation}\label{eq:hGr-unif-op1}\begin{aligned}
\sup_{\|h\|\le M} \|h\|\,|\mathbb G_n r_{t_{n,h}}| \ \xrightarrow{p}\ 0.

\end{aligned}\end{equation}</span></p>
<p>Combining \eqref{eq:Qn-decomp}–\eqref{eq:stoch-part} with \eqref{eq:det-part} and \eqref{eq:hGr-unif-op1}, we have: for
every fixed <span class="math inline">\(M&lt;\infty\)</span>, <span class="math display">\begin{equation}\label{eq:Qn-unif-expansion}\begin{aligned}
\sup_{\|h\|\le M}\Big|Q_n(h) - \Big(\frac12 h&#39;Vh + h&#39;\mathbb
G_n\Delta\Big)\Big|
\ \xrightarrow{p}\ 0. 
\end{aligned}\end{equation}</span></p>
<p><strong>Step 5 (near-minimization implies <span
class="math inline">\(\sqrt n\)</span>-rate and an asymptotic linear
representation).</strong> Let <span class="math inline">\(h_n\equiv
\sqrt n(\tau_n-t_0)\)</span>. Assumption (3) is the standard
“near-minimizer” condition at <span
class="math inline">\(n^{-1}\)</span>-accuracy; we use it in the form
<span class="math display">\begin{equation}\label{eq:near-min}\begin{aligned}
F_n(\tau_n)\le \inf_{t\in T} F_n(t) + o_p(n^{-1}). 
\end{aligned}\end{equation}</span> (If condition (3) has <span
class="math inline">\(F(\tau_n)\)</span> instead of <span
class="math inline">\(F_n(\tau_n)\)</span>, the same argument goes
through provided <span
class="math inline">\(F_n(\tau_n)-F(\tau_n)=o_p(n^{-1})\)</span>, which
follows from consistency plus local stochastic equicontinuity of the
empirical process.)</p>
<p>From \eqref{eq:near-min} we get, in particular,
<span class="math display">\[Q_n(h_n) =
n\left(F_n(\tau_n)-F_n(t_0)\right) \le o_p(1),\]</span> since <span
class="math inline">\(t_0\in T\)</span> implies <span
class="math inline">\(\inf_{t}F_n(t)\le F_n(t_0)\)</span>.</p>
<p>Fix <span class="math inline">\(M\)</span> large. On the event <span
class="math inline">\(\{\|h_n\|\le M\}\)</span> we may apply \eqref{eq:Qn-unif-expansion} at
<span class="math inline">\(h=h_n\)</span>: <span
class="math display">\[Q_n(h_n)=\frac12 h_n&#39;Vh_n + h_n&#39;\mathbb
G_n\Delta + o_p(1).\]</span> Because <span class="math inline">\(\mathbb
G_n\Delta=O_p(1)\)</span> by the multivariate CLT and <span
class="math inline">\(\tau_n\to_p t_0\)</span> by assumption, one can
pick <span class="math inline">\(M\)</span> so that <span
class="math inline">\(\mathbf P\,\,\!\!(\|h_n\|\le M)\to 1\)</span>. (A
direct way is to use the inequality <span
class="math inline">\(\frac{\lambda_{\min}}{2}\|h_n\|^2 \le
\|h_n\|\|\mathbb G_n\Delta\|+o_p(1)\)</span> to deduce <span
class="math inline">\(\|h_n\|=O_p(1)\)</span>.)</p>
<p>Now define <span class="math inline">\(b_n\equiv -V^{-1}\mathbb
G_n\Delta\)</span>. Complete the square: <span class="math display">\begin{equation}\label{eq:complete-square}\begin{aligned}
\frac12 h&#39;Vh + h&#39;\mathbb G_n\Delta
= \frac12 (h-b_n)&#39;V(h-b_n) - \frac12 b_n&#39;Vb_n.

\end{aligned}\end{equation}</span> Using \eqref{eq:Qn-unif-expansion} and \eqref{eq:near-min}, together with the fact
that <span class="math inline">\(h_n\)</span> is an <span
class="math inline">\(o_p(1)\)</span>-minimizer of <span
class="math inline">\(Q_n(\cdot)\)</span>, we obtain <span class="math display">\begin{equation}\label{eq:gap}\begin{aligned}
0 \le Q_n(h_n)-Q_n(b_n)
&amp;= \frac12 (h_n-b_n)&#39;V(h_n-b_n) + o_p(1). 
\end{aligned}\end{equation}</span> Since <span class="math inline">\(V\succeq
\lambda_{\min} I_k\)</span>, <span class="math display">\[\frac12
(h_n-b_n)&#39;V(h_n-b_n) \ge
\frac{\lambda_{\min}}{2}\|h_n-b_n\|^2,\]</span> and thus \eqref{eq:gap} yields <span
class="math inline">\(\|h_n-b_n\|^2=o_p(1)\)</span>, i.e. <span class="math display">\begin{equation}\label{eq:ALR}\begin{aligned}
\sqrt n(\tau_n-t_0) = h_n = -V^{-1}\mathbb G_n\Delta + o_p(1).

\end{aligned}\end{equation}</span></p>
<p><strong>Step 6 (CLT and conclusion).</strong> By assumption (4),
<span class="math inline">\(\Delta\in L^2(P)^k\)</span>, hence <span
class="math display">\[\mathbb G_n\Delta
=\frac1{\sqrt n}\sum_{i=1}^n\left(\Delta(X_i)-P\Delta\right)
\xrightarrow{d} \mathcal N \left(0,\ \Sigma\right),
\qquad
\Sigma \equiv P(\Delta\Delta&#39;)-(P\Delta)(P\Delta)&#39;.\]</span>
Combine this with \eqref{eq:ALR} and Slutsky’s theorem to obtain
<span class="math display">\[\sqrt n(\tau_n-t_0) \xrightarrow{d}
\mathcal N \left(0,\ V^{-1}\Sigma V^{-1}\right),\]</span> which is
exactly the claim. ◻</p>
</div>
<p>This argument is the standard “local quadratic expansion and
stochastic equicontinuity” route used in Pollard-style treatments of
M-estimation, and matches the general asymptotic normality statement for
M-estimators (via an argmax/argmin theorem).</p>
<h2 id="chaining">Chaining</h2>
<p>To begin constructing maximal inequalities that avoid the pitfalls of
“overshooting” approximation errors, we first relax the assumption
required in the definition of a Lipschitz process. Namely, we first want
to relax the requirement that <span class="math inline">\(|X_t - X_s|
\lesssim d(t,s)\)</span> almost surely. Instead, we want to replace this
by a condition that allows us to control these increments via “how far”
<span class="math inline">\(s\)</span> and <span
class="math inline">\(t\)</span> are in the metric space <span
class="math inline">\(T\)</span>. Before giving such a relaxation, here
is a general result that applies for subgaussian random variables.</p>
<div id="prop:maximal-inequality-random-psuedo-Lipschitz"
class="proposition">
<p><strong>Proposition 20</strong>. Suppose <span
class="math inline">\(T\)</span> is a finite set, and let <span
class="math inline">\(\{X_t\}_{t \in T}\)</span> be a stochastic
process. For all <span class="math inline">\(t \in T\)</span> and <span
class="math inline">\(\eta \geq 0\)</span>, assume the following
inequality holds: <span class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(|X_t| \geq \eta) \leq 2
e^{-\frac{\eta^2}{2\sigma^2}} ~,
    
\end{aligned}\]</span> where <span class="math inline">\(\sigma &gt;
0\)</span> is fixed. Then, there exists a universal positive constant
<span class="math inline">\(C\)</span> such that <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{t \in T} \: |X_t| \leq C \sigma \sqrt{\log |2T|}
~.
    
\end{aligned}\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> Since <span class="math inline">\(\sup_{t \in T} \:
|X_t|\)</span> is positive, we have <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{t \in T} \: |X_t| = \int_0^\infty \mathbf
P\,\,\!\!\left( \sup_{t \in T} \: |X_t| \geq \eta \right) \mathrm{d} \eta
    
\end{aligned}\]</span> by an elementary result. Then, it remains to
bound the tail probability for every <span class="math inline">\(\eta
\geq 0\)</span>. By assumption, <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( \sup_{t \in T} \: |X_t| \right) =
\mathbf P\,\,\!\!\left( \bigcup_{\eta \geq 0} \{ |X_t| \geq \eta \}
\right) \leq \sum_{t \in T} \mathbf P\,\,\!\!(|X_t| \geq \eta) \leq 2|T|
e^{-\frac{\eta^2}{2\sigma^2}} ~.
    
\end{aligned}\]</span> For some suitably chosen “intermediate cutoff
point” <span class="math inline">\(\eta_0\)</span>, we have <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{t \in T} \: |X_t| &amp;= \int_0^{\eta_0} \mathbf
P\,\,\!\!\left( \sup_{t \in T} \: |X_t| \geq \eta \right) \mathrm{d} \eta +
\int_{\eta_0}^\infty \mathbf P\,\,\!\!\left( \sup_{t \in T} \: |X_t|
\geq \eta \right) \mathrm{d} \eta  \\
        &amp;\leq \eta_0 + \int_{\eta_0}^\infty 2|T|
e^{-\frac{\eta^2}{2\sigma^2}} \mathrm{d} \eta \\
        &amp;\leq \eta_0 + \int_{\eta_0}^\infty 2|T| \frac{\eta}{\eta_0}
e^{-\frac{\eta^2}{2\sigma^2}} \mathrm{d} \eta \\
        &amp;= \eta_0 + \frac{2|T| \sigma^2}{\eta_0}
e^{-\frac{\eta_0^2}{2\sigma^2}} ~.
    
\end{aligned}\]</span> Clearly, if <span
class="math inline">\(T\)</span> is large, the upper bound is crude.
Therefore, pick <span class="math inline">\(\eta_0\)</span> such that
the (growing) constant <span class="math inline">\(2|T|\)</span>
vanishes, or <span class="math display">\[\begin{aligned}
         e^{-\frac{\eta_0^2}{2\sigma^2}} = (2|T|)^{-1} \iff \eta_0 =
\sqrt{2 \sigma^2 \log |2T|} ~.
    
\end{aligned}\]</span> Therefore, we have <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{t \in T} \: |X_t| &amp;\leq \sqrt{2 \sigma^2
\log |2T|} + \frac{\sigma^2}{\sqrt{2 \sigma^2 \log |2T|}} \lesssim C
\sigma \sqrt{\log|2T|} ~,
    
\end{aligned}\]</span> as desired. ◻</p>
</div>
<p>This motivates the following definition of a <em>subgaussian
process</em>: a random process <span class="math inline">\(\{X_t\}_{t
\in T}\)</span>, where <span class="math inline">\((T,d)\)</span> is a
metric space, is <em>subgaussian</em> if <span
class="math inline">\(\mathbb E X_t = 0\)</span> and <span
class="math display">\[\begin{aligned}
    \mathbb E e^{\lambda(X_t-X_s)} \leq e^{\frac{\lambda^2 d(s,t)^2}{2}}
\end{aligned}\]</span> for all <span class="math inline">\(s,t \in
T\)</span> and <span class="math inline">\(\lambda \geq 0\)</span>. Note
that this immediately implies (and is equivalent to, up to constants)
<span class="math display">\[\begin{aligned}
    \mathbf P\,\,\!\!(|X_t - X_s| \geq x) \leq C e^{-\frac{x^2}{C
d(s,t)^2}} ~.
\end{aligned}\]</span> As an elementary exercise, we can always pick
<span class="math inline">\(C=2\)</span>. More importantly, this gives
us tighter control over how to describe the behaviour of <span
class="math inline">\(\{X_t\}_{t \in T}\)</span>, when <span
class="math inline">\(T\)</span> is a finite set. Here is one form of
such result, called Dudley’s entropy bound.</p>
<div id="thm:dudley-entropy-finite-T" class="theorem">
<p><strong>Theorem 21</strong> (Dudley’s entropy bound; finite <span
class="math inline">\(T\)</span>). Let <span
class="math inline">\((T,d)\)</span> be a finite metric space. Let <span
class="math inline">\(\{X_t\}_{t\in T}\)</span> be a subgaussian
process. Then, there exists a universal positive constant <span
class="math inline">\(C\)</span> such that the following inequality
holds for every <span class="math inline">\(t_0 \in T\)</span>: <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{t \in T} \: |X_t - X_{t_0}| \leq C \int_0^\infty
\sqrt{\log D(\varepsilon, T, d)} \mathrm{d} \varepsilon \lesssim \int_0^\infty
\sqrt{\log N(\varepsilon,T,d)} \mathrm{d} \varepsilon ~.
    
\end{aligned}\]</span></p>
</div>
<p>Clearly, since <span class="math inline">\(T\)</span> is a finite
set, the diameter of <span class="math inline">\(T\)</span>, denoted
<span class="math inline">\(\operatorname{diam}(T)\)</span>, is finite,
so <span class="math display">\[\begin{aligned}
    \int_0^\infty \sqrt{\log D(\varepsilon, T, d)} \mathrm{d} \varepsilon =
\int_0^{\operatorname{diam}(T)} \sqrt{\log D(\varepsilon, T, d)} \mathrm{d}
\varepsilon ~.
\end{aligned}\]</span> It then follows from the scaling property of the
packing number that <span class="math display">\[\begin{aligned}
    &amp;\int_0^{\operatorname{diam}(T)} \sqrt{\log D(\varepsilon, T,
d)} \mathrm{d} \varepsilon \\
    &amp;= \int_0^{\operatorname{diam}(T)/2} \sqrt{\log D(\varepsilon,
T, d)} \mathrm{d} \varepsilon +
\int_{\operatorname{diam}(T)/2}^{\operatorname{diam}(T)} \sqrt{\log
D(\varepsilon, T, d)} \mathrm{d} \varepsilon \\
    &amp;\leq \int_0^{\operatorname{diam}(T)/2} \sqrt{\log
D(\varepsilon, T, d)} \mathrm{d} \varepsilon +
\int_0^{\operatorname{diam}(T)/2} \sqrt{\log D\left(\varepsilon +
\frac{\operatorname{diam}(T)}{2}, T, d\right)} \mathrm{d} \varepsilon \\
    &amp;\leq 2 \int_0^{\operatorname{diam}(T)/2} \sqrt{\log
D(\varepsilon, T, d)} \mathrm{d} \varepsilon ~.
\end{aligned}\]</span> Dudley’s entropy bound can then be stated
equivalently as <span class="math display">\[\begin{aligned}
    \mathbb E \sup_{t \in T} \: |X_t - X_{t_0}| \leq 2C
\int_0^{\operatorname{diam}(T)/2} \sqrt{\log D(\varepsilon, T, d)} \mathrm{d}
\varepsilon ~.
\end{aligned}\]</span></p>
<p>To proceed proving Dudley’s entropy bound, the technique we will use
is a principle of <em>chaining</em>. Here, <span
class="math inline">\(T\)</span> is finite, so it makes sense to
construct a shrinking sequence of chains that, altogether, “link” the
set <span class="math inline">\(T\)</span> together. On each of these
links, we apply Proposition <a
href="#prop:maximal-inequality-random-psuedo-Lipschitz"
data-reference-type="ref"
data-reference="prop:maximal-inequality-random-psuedo-Lipschitz">20</a>
to show that these bounds contribute small amounts to <span
class="math inline">\(\mathbb E \sup_{t \in T} \: |X_t -
X_{t_0}|\)</span>. The conclusion then follows from arguing that we can
choose arbitrarily small chains to send the approximation error to
zero.</p>
<div class="proof">
<p><em>Proof of Theorem <a href="#thm:dudley-entropy-finite-T"
data-reference-type="ref"
data-reference="thm:dudley-entropy-finite-T">21</a>.</em> Let <span
class="math inline">\(\overline D = \operatorname{diam}(T)\)</span>. The
idea is to proceed with approximation on a decreasing scale. For <span
class="math inline">\(n \geq 1\)</span>, let <span
class="math inline">\(T_n\)</span> be a maximal <span
class="math inline">\(2^{-n} \overline D\)</span>-separated set, i.e.
<span class="math inline">\(|T_n| = D(2^{-n} \overline D, T,
d)\)</span>. It follows that <span
class="math display">\[\begin{aligned}
        \sup_{t \in T} \: \inf_{s \in T_n} d(s,t) \leq 2^{-n} \overline
D ~.
    
\end{aligned}\]</span> For <span class="math inline">\(n\)</span> large
enough, it is clear that <span class="math inline">\(T_n\)</span> will
equal <span class="math inline">\(T\)</span>, because <span
class="math inline">\(T\)</span> is a finite set. Therefore, set <span
class="math display">\[\begin{aligned}
        N \triangleq \inf \{n \in \mathbb N : T_n = T \} ~.
    
\end{aligned}\]</span> As before, we define a map, for all <span
class="math inline">\(n \in \mathbb N\)</span> that sends <span
class="math inline">\(t \in T\)</span> to the point in <span
class="math inline">\(T_n\)</span> such that it is closest to <span
class="math inline">\(t\)</span>. If there are ties, then pick any one
of the ties arbitrarily. We denote this map by <span
class="math inline">\(\pi_n\)</span>, following convention. Therefore,
<span class="math inline">\(\pi_n\)</span> satisfies <span
class="math display">\[\begin{aligned}
        d(t, \pi_n(t)) = \inf_{s \in T_n} d(s,t) ~~\text{for all } n \in
\mathbb N ~.
    
\end{aligned}\]</span> It then follows from the definitions above that
<span class="math display">\[\begin{aligned}
        d(t, \pi_n(t)) \leq 2^{-n} \overline D ~~\text{for all } n \in
\mathbb N \text{ and } t \in T ~.
    
\end{aligned}\]</span></p>
<p>It is clear that <span class="math inline">\(\pi_N (t) = t\)</span>.
If we set <span class="math inline">\(T_0 = \{t_0\}\)</span> and <span
class="math inline">\(\pi_0(t) = t_0\)</span> for all <span
class="math inline">\(t \in T\)</span>, we can then argue the following:
it is clear that <span class="math display">\[\begin{aligned}
        X_t - X_{t_0} = \sum_{1 \leq k \leq N} X_{\pi_k(t)} -
X_{\pi_{k-1}(t)} ~,
    
\end{aligned}\]</span> with <span class="math inline">\(t_0 = \pi_0(t)
\to \pi_1(t) \to \pi_2(t) \to \cdots \to \pi_N(t) = t\)</span> being a
chain from <span class="math inline">\(t_0\)</span> to <span
class="math inline">\(t\)</span>. So, we have <span
class="math display">\[\begin{aligned}
        \sup_{t \in T} \: |X_t - X_{t_0}| \leq \sup_{t \in T} \sum_{1
\leq k \leq N} X_{\pi_k(t)} - X_{\pi_{k-1}(t)} \leq \sum_{1 \leq k \leq
N} \sup_{t \in T} \: X_{\pi_k(t)} - X_{\pi_{k-1}(t)} ~,
    
\end{aligned}\]</span> since <span class="math inline">\(T\)</span> is a
finite set. It then follows that <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{t \in T} \: |X_t - X_{t_0}| \leq \sum_{1 \leq k
\leq N} \mathbb E \sup_{t \in T} \: |X_{\pi_k(t)} - X_{\pi_{k-1}(t)}| ~,
    
\end{aligned}\]</span> We now appeal to Proposition <a
href="#prop:maximal-inequality-random-psuedo-Lipschitz"
data-reference-type="ref"
data-reference="prop:maximal-inequality-random-psuedo-Lipschitz">20</a>
for each <span class="math inline">\(1 \leq n \leq N\)</span>. Before
that, we need to pick a suitable constant. Because <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(|X_{\pi_k(t)} - X_{\pi_{k-1}(t)}| \geq \eta)
&amp;\leq 2 e^{-\frac{\eta^2}{2 d(\pi_k(t), \pi_{k-1}(t))^2}} ~,
        \end{aligned}\]</span>

<p>and</p>

<span class="math display">\[\begin{aligned}
        d(\pi_k(t), \pi_{k-1}) \leq d(\pi_k(t), t) + d(t, \pi_{k-1}(t))
&amp;\leq 2^{-k} 3 \overline D ~,
    
\end{aligned}\]</span> we can then apply Proposition <a
href="#prop:maximal-inequality-random-psuedo-Lipschitz"
data-reference-type="ref"
data-reference="prop:maximal-inequality-random-psuedo-Lipschitz">20</a>
with the constant <span class="math inline">\(\sigma = 2^{-k} 3
\overline D\)</span>. We then have (the “formal” bounds) <span
class="math display">\[\begin{aligned}
         \mathbb E \sup_{t \in T} \: |X_{\pi_k(t)} - X_{\pi_{k-1}(t)}|
&amp;\leq 2^{-k} 3 C \overline D \sqrt{\log 2 |T_k| |T_{k-1}|} \\
         &amp;\lesssim 2^{-k} C \overline D \sqrt{\log 2 |T_k|^2} \\
         &amp;\leq 2^{-k} C \overline D \sqrt{\log 2 D(2^{-k} \overline
D, T, d)} ~.
    
\end{aligned}\]</span> Here, it is understood that the choice of the
constant <span class="math inline">\(C\)</span> can vary from one
segment of the chain to another. Here, this does not end up affecting
the arguments below. With this understanding, we must then have <span
class="math display">\[\begin{aligned}
        &amp;\quad \mathbb E \sup_{t \in T} \: |X_t - X_{t_0}| \leq
\sum_{1 \leq k \leq N} 2^{-k} C \overline D \sqrt{\log 2 D(2^{-k}
\overline D, T, d)} \\
        &amp;\leq 2C \sum_{1 \leq k \leq N} \int_{2^{-(k+1)} \overline
D}^{2^{-k} \overline D} \sqrt{\log 2 D(\varepsilon, T, d)} \mathrm{d}
\varepsilon \\
        &amp;= C \int_{2^{-(N+1)} \overline D}^{2^{-1} \overline D}
\sqrt{\log 2 D(\varepsilon, T, d)} \mathrm{d} \varepsilon \\
        &amp;\lesssim C \int_{0}^{2^{-1} \overline D} \sqrt{\log 2
D(\varepsilon, T, d)} \mathrm{d} \varepsilon \\
        &amp;= C \int_{0}^{2^{-2} \overline D} \sqrt{\log 2
D(\varepsilon, T, d)} \mathrm{d} \varepsilon + C \int_{0}^{2^{-2} \overline D}
\sqrt{\log 2 D\left(\varepsilon + \frac{\overline D}{4}, T, d\right)}
\mathrm{d} \varepsilon \\
        &amp;\lesssim 2C \int_{0}^{2^{-2} \overline D} \sqrt{\log 2
D(\varepsilon, T, d)} \mathrm{d} \varepsilon ~,
    
\end{aligned}\]</span> where the various steps follow from identical
arguments as before. All there remains to do is to bound the entropy
from above. If <span class="math inline">\(\varepsilon &lt; 2^{-2}
\overline D\)</span>, we msut then have <span
class="math inline">\(D(\varepsilon, T, d) \geq 2\)</span> (there can’t
be less than two balls of radius of one-fourth-of-diameter of a set
<span class="math inline">\(T\)</span> that packs <span
class="math inline">\(T\)</span>!). Therefore, we must have <span
class="math inline">\(\log 2D(\varepsilon,T,d) \leq \log 2 + \log
D(\varepsilon, T,d) \leq 2 \log D(\varepsilon, T,d)\)</span>. Combining
everything, we have <span class="math display">\[\begin{aligned}
        \mathbb E \sup_{t \in T} \: |X_t - X_{t_0}| &amp;\leq 2\sqrt{2}
C \int_{0}^{2^{-2} \overline D} \sqrt{\log D(\varepsilon, T, d)} \mathrm{d}
\varepsilon ~.
    
\end{aligned}\]</span> This concludes the proof. Appealing to Lemma <a
href="#lem:covering-packing-comparisons" data-reference-type="ref"
data-reference="lem:covering-packing-comparisons">6</a> for the second
conclusion. ◻</p>
</div>
<p>The arguments above clearly do not readily extend to the case where
<span class="math inline">\(|T| = \infty\)</span>. It can be the case
that the required chain is not finite in its length. If the number of
segments in the required chain is uncountable, then we have no hope of
using an analogue of the argument above. What we need is a condition
that makes sure that the set <span class="math inline">\(T\)</span> has
points that are all sufficiently close to one another; at the very
least, it must contain a countable, dense subset, so that we can convert
the approximation arguments presented above. Otherwise, we will have no
hope of tackling this question. This is because, in general, we have no
hope of dealing with a supremum of an uncountable family of random
variables (measurable functions)—that need not be (and generally isn’t)
measurable.</p>
<p>We need a mild restriction on the metric space <span
class="math inline">\((T,d)\)</span>. A stochastic process <span
class="math inline">\(\{X_t\}_{t \in T}\)</span> is <em>separable</em>
if there exists a countable subset <span
class="math inline">\(\widetilde T\)</span> of <span
class="math inline">\(T\)</span>, and a measure zero set <span
class="math inline">\(N\)</span>, such that for all <span
class="math inline">\(\omega \notin N\)</span> and <span
class="math inline">\(t \in T\)</span>, there exists a sequence <span
class="math inline">\(\{t_n\}\)</span> in <span
class="math inline">\(\widetilde T\)</span> such that <span
class="math inline">\(\lim\limits_{n \to \infty} d(t_n, t) = 0\)</span>
and <span class="math inline">\(\lim\limits_{n \to \infty} X_{t_n}
(\omega) = X_t (\omega)\)</span>. A useful characterization of a
separable stochastic process is the following: if <span
class="math inline">\((T,d)\)</span> is separable, and <span
class="math inline">\(\{X_t\}_{t \in T}\)</span> has continuous sample
paths almost surely, then <span class="math inline">\(\{X_t\}_{t \in
T}\)</span> is separable. Furthermore, if <span
class="math inline">\(\{X_t\}_{t \in T}\)</span> is separable, then
<span class="math inline">\(\sup_{t \in T} \: |X_t - X_{t_0}| = \sup_{t
\in \widetilde T} |X_t - X_{t_0}|\)</span> almost surely for all <span
class="math inline">\(t_0 \in T\)</span>.</p>
<p>We are now ready to state and prove Dudley’s entropy bound in full
generality, when <span class="math inline">\(T\)</span> is not
necessarily a finite set.</p>
<div id="thm:dudley-entropy-bound-infinite-T" class="theorem">
<p><strong>Theorem 22</strong>. Let <span
class="math inline">\((T,d)\)</span> be a separable metric space. Let
<span class="math inline">\(\{X_t\}_{t\in T}\)</span> be a separable
subgaussian process. Then, there exists a universal positive constant
<span class="math inline">\(C\)</span> such that the following
inequality holds for every <span class="math inline">\(t_0 \in
T\)</span>: <span class="math display">\[\begin{aligned}
        \mathbb E \sup_{t \in T} \: |X_t - X_{t_0}| \leq C
\int_0^{2^{-2} \overline D} \sqrt{\log D(\varepsilon, T, d)} \mathrm{d}
\varepsilon \lesssim \int_0^{2^{-2} \overline D} \sqrt{\log
N(\varepsilon,T,d)} \mathrm{d} \varepsilon ~,
    
\end{aligned}\]</span> where <span class="math inline">\(\overline D
\triangleq \operatorname{diam}(T)\)</span>, and this need not be
finite.</p>
</div>
<div class="proof">
<p><em>Proof.</em> There exists a countable, dense subset <span
class="math inline">\(\widetilde T\)</span> of <span
class="math inline">\(T\)</span> such that <span
class="math inline">\(\sup_{t \in T} \: |X_t - X_{t_0}| = \sup_{t \in
\widetilde T} |X_t - X_{t_0}|\)</span> almost surely for all <span
class="math inline">\(t_0 \in T\)</span>. Add <span
class="math inline">\(t_0\)</span> to <span
class="math inline">\(\widetilde T\)</span> if necessary, so that for
each <span class="math inline">\(k \geq 1\)</span>, set <span
class="math inline">\(\widetilde T_k\)</span> be a finite set obtained
from taking the first <span class="math inline">\(k\)</span> elements of
<span class="math inline">\(\widetilde T\)</span>. The order of this
construction doesn’t matter, and <span class="math inline">\(\widetilde
T_k\)</span> can be made such that it contain <span
class="math inline">\(t_0\)</span> for all <span class="math inline">\(k
\in \mathbb N\)</span>. Applying Theorem <a
href="#thm:dudley-entropy-finite-T" data-reference-type="ref"
data-reference="thm:dudley-entropy-finite-T">21</a> to <span
class="math inline">\(\{X_t\}_{t \in \widetilde T}\)</span>, and writing
<span class="math inline">\(\overline D_k =
\operatorname{diam}(\widetilde T_k)\)</span>, we have <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{t \in \widetilde T_k} |X_t - X_{t_0}| &amp;\leq
C \int_{0}^{2^{-2} \overline D_k} \sqrt{\log D(\varepsilon, \widetilde
T_k, d)} \mathrm{d} \varepsilon \leq C \int_{0}^{2^{-2} \overline D}
\sqrt{\log D(\varepsilon, T, d)} \mathrm{d} \varepsilon ~.
    
\end{aligned}\]</span> Passing both sides of the inequality to <span
class="math inline">\(k\to\infty\)</span>, we must then have, by the
monotone convergence theorem, <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{t \in T} \: |X_t - X_{t_0}| \leq C
\int_{0}^{2^{-2} \overline D} \sqrt{\log D(\varepsilon, T, d)} \mathrm{d}
\varepsilon ~.
    
\end{aligned}\]</span> Applying the fact that <span
class="math inline">\(\sup_{t \in T} \: |X_t - X_{t_0}| = \sup_{t \in
\widetilde T} |X_t - X_{t_0}|\)</span> almost surely concludes the
proof. ◻</p>
</div>
<div id="rem:discretized-entropy-dudley-bound" class="remark">
<p><strong>Remark 23</strong>. We can also put a constant on Dudley’s
entropy bound, using metric entropy. Explicitly, we would need to first
prove (via very similar reasoning as above!) that <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{t \in T} \: |X_t - X_{t_0}| \leq 6 \sum_{k \in
\mathbb Z} 2^{-k} \sqrt{\log N(2^{-k}, T, d)}
    
\end{aligned}\]</span> via covering arguments. If <span
class="math inline">\(T\)</span> is finite, the argument begins with
choosing the largest constant <span class="math inline">\(k_0 \in
\mathbb N\)</span> such that <span class="math inline">\(2^{-k_0} \geq
\operatorname{diam}(T)\)</span>. Then, <span
class="math inline">\(\{t_0\}\)</span> is trivially a <span
class="math inline">\(2^{-k_0}\)</span>-cover. So, we start chaining at
the scale <span class="math inline">\(2^{-k_0}\)</span>. Running the
chain at scale <span class="math inline">\(2^{-k}\)</span> for <span
class="math inline">\(k &gt; k_0\)</span>, and appealing to analogous
arguments as above, we obtain <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{t \in T} \: |X_t - X_{t_0}| \leq 6 \sum_{k &gt;
k_0} 2^{-k} \sqrt{\log N(2^{-k}, T, d)} ~,
    
\end{aligned}\]</span> from which the desired result follows. By
separability and monotone convergence theorem, we get the desired result
if <span class="math inline">\(T\)</span> is infinite. And, <span
class="math display">\[\begin{aligned}
        6 \sum_{k \in \mathbb Z} 2^{-k} \sqrt{\log N(2^{-k}, T, d)}
&amp;= 12 \sum_{k \in \mathbb Z} \int_{2^{-(k+1)}}^{2^{-k}} \sqrt{\log
N(2^{-k}, T, d)} \mathrm{d} \varepsilon \\
        &amp;\leq 12 \sum_{k \in \mathbb Z} \int_{2^{-(k+1)}}^{2^{-k}}
\sqrt{\log N(\varepsilon, T, d)} \mathrm{d} \varepsilon \\
        &amp;= 12 \int_0^{\infty} \sqrt{\log N(\varepsilon, T, d)} \mathrm{d}
\varepsilon ~,
    
\end{aligned}\]</span> where the inequality follows because <span
class="math inline">\(N(\varepsilon, T, d)\)</span> is decreasing in
<span class="math inline">\(\varepsilon\)</span>.</p>
</div>
<p>There is also hope of attaining a “finite sample”-type result for how
“far away the points are” on a stochastic process if we utilize chaining
correctly. To do this, we define the <strong>uniform entropy
integral</strong> (or <strong>covering integral</strong>, <span
class="citation" data-cites="pollard_convergence_1984"></span>) <span class="math display">\begin{equation}\label{eq:uniform-entropy-integral}\begin{aligned}

    J(\delta, T, d) \triangleq \int_0^\delta \sqrt{2 \log
(N(\varrho,T,d)^2 / \varrho)} \mathrm{d} \varrho \quad \text{for }~ \delta \in
(0,1] ~.
\end{aligned}\end{equation}</span> The main result is called the <em>chaining
lemma</em>, and it relies on a few careful arguments that can mostly be
replaced by less fastidious uses of upper bounds on covering numbers, as
we will see below.</p>
<div id="lem:chaining-lemma" class="lemma">
<p><strong>Lemma 24</strong> (Chaining). Let <span
class="math inline">\(\{Z(t):t \in T\}\)</span> be a stochastic process
whose index set <span class="math inline">\(T\)</span> has a finite
covering integral <span class="math inline">\(J(\delta, T, d)\)</span>.
Suppose further that there exists a constant <span
class="math inline">\(D\)</span> such that for all <span
class="math inline">\(s,t\)</span>, <span class="math display">\begin{equation}\label{eq:subg-increments}\begin{aligned}
        \mathbf P\,\,\!\!(|Z(s) - Z(t)| &gt; \eta d(s,t)) \leq 2
e^{-\eta^2/(2 D^2)} \quad \text{for }~ \eta &gt; 0 ~.

    
\end{aligned}\end{equation}</span> For <span
class="math inline">\(\delta\in(0,1]\)</span>, define the covering
number <span class="math display">\[N(\delta)\equiv N(\delta,T,d) \equiv
\min\left\{m:\exists\,t_1,\dots,t_m\in T\text{ s.t. }\forall t\in T,\
\min_{1\le j\le m}d(t,t_j)\le \delta\right\},\]</span> and define <span class="math display">\begin{equation}\label{eq:def-H}\begin{aligned}
    H(u)&amp; \equiv \left(2\log
\left(\frac{N(u)^2}{u}\right)\right)^{1/2},\qquad u\in(0,1],
    
    \\
    J(\delta,T,d)&amp; \equiv \int_{0}^{\delta} H(u)\,du\in[0,\infty].
    \label{eq:def-J}
    
\end{aligned}\end{equation}</span> Assume <span
class="math inline">\(J(\varepsilon,T,d)&lt;\infty\)</span> for the
<span class="math inline">\(\varepsilon\)</span> used below. Then, there
exists a countable dense subset <span class="math inline">\(T^* \subset
T\)</span> such that for <span class="math inline">\(\varepsilon \in
(0,1)\)</span>, <span class="math display">\begin{equation}\label{eq:goal-prob}\begin{aligned}
        \mathbf P\,\,\!\!(|Z(s) - Z(t)| &gt; 26 D J(d(s,t), T, d)
~\text{for some}~ s,t \in T^* ~\text{s.t.}~ d(s,t) \leq \varepsilon)
\leq 2 \varepsilon ~. 
    
\end{aligned}\end{equation}</span> Furthermore, if <span
class="math inline">\(Z\)</span> has continuous sample paths, then <span
class="math inline">\(T^*\)</span> can be replaced by <span
class="math inline">\(T\)</span>.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Fix <span
class="math inline">\(\varepsilon\in(0,1)\)</span>. We prove \eqref{eq:goal-prob} in explicit steps.
Define radii <span class="math display">\begin{equation}\label{eq:delta_i}\begin{aligned}
\delta_i \equiv \frac{\varepsilon}{2^i},\qquad i=1,2,3,\dots

\end{aligned}\end{equation}</span> so that <span
class="math inline">\(\sum_{i=1}^\infty
\delta_i=\varepsilon\)</span>.</p>
<ol>
<li><p>We construct finite sets <span class="math inline">\(T_i\subset
T\)</span> satisfying:</p>
<ol>
<li><p><span class="math inline">\(T_i\)</span> is a <span
class="math inline">\(2\delta_i\)</span>-net: for every <span
class="math inline">\(t\in T\)</span>, there exists <span
class="math inline">\(\pi_i(t)\in T_i\)</span> such that <span class="math display">\begin{equation}\label{eq:projection-net}\begin{aligned}
    d\left(t,\pi_i(t)\right)\le 2\delta_i.
    
    
\end{aligned}\end{equation}</span></p></li>
<li><p>(Nesting) <span class="math inline">\(T_i\subset T_{i+1}\)</span>
for all <span class="math inline">\(i\)</span>.</p></li>
<li><p>(Cardinality bound) <span class="math inline">\(|T_i|\le
N(\delta_i)\)</span> for all <span
class="math inline">\(i\)</span>.</p></li>
</ol>
<p><em>Construction.</em> Start with any nonempty finite <span
class="math inline">\(T_1\subset T\)</span> that is a <span
class="math inline">\(2\delta_1\)</span>-net and satisfies <span
class="math inline">\(|T_1|\le N(\delta_1)\)</span> (e.g. take a minimal
<span class="math inline">\(\delta_1\)</span>-cover and keep its
centers; it is automatically a <span
class="math inline">\(2\delta_1\)</span>-net). Inductively, given <span
class="math inline">\(T_i\)</span>, extend it to a <em>maximal</em>
<span class="math inline">\(2\delta_{i+1}\)</span>-separated set <span
class="math inline">\(T_{i+1}\)</span> containing <span
class="math inline">\(T_i\)</span>, i.e. enlarge <span
class="math inline">\(T_i\)</span> by adding points in <span
class="math inline">\(T\)</span> while maintaining <span
class="math display">\[d(u,v)&gt;2\delta_{i+1}\quad\text{for all
distinct }u,v\in T_{i+1},\]</span> until no further point can be
added.</p>
<p><em>Verification of (S1.1).</em> If <span
class="math inline">\(T_{i+1}\)</span> is maximal <span
class="math inline">\(2\delta_{i+1}\)</span>-separated, then it is a
<span class="math inline">\(2\delta_{i+1}\)</span>-net: otherwise there
exists <span class="math inline">\(t\in T\)</span> with <span
class="math inline">\(d(t,u)&gt;2\delta_{i+1}\)</span> for all <span
class="math inline">\(u\in T_{i+1}\)</span>, so we could add <span
class="math inline">\(t\)</span>, contradicting maximality. Thus \eqref{eq:projection-net} holds with
<span class="math inline">\(i+1\)</span>.</p>
<p><em>Verification of (S1.3).</em> Let <span
class="math inline">\(A\subset T\)</span> be any <span
class="math inline">\(2\delta\)</span>-separated subset. Take a <span
class="math inline">\(\delta\)</span>-cover of <span
class="math inline">\(T\)</span> with <span
class="math inline">\(N(\delta)\)</span> balls <span
class="math inline">\(\{B(t_j,\delta)\}_{j=1}^{N(\delta)}\)</span>
centered at points in <span class="math inline">\(T\)</span>. Since
<span class="math inline">\(A\)</span> is <span
class="math inline">\(2\delta\)</span>-separated, each ball contains
<em>at most one</em> point of <span class="math inline">\(A\)</span>
(otherwise two points in the same ball would have distance <span
class="math inline">\(\le 2\delta\)</span>). Hence <span
class="math inline">\(|A|\le N(\delta)\)</span>. Apply this with <span
class="math inline">\(A=T_i\)</span> and <span
class="math inline">\(\delta=\delta_i\)</span> to get <span
class="math inline">\(|T_i|\le N(\delta_i)\)</span>.</p>
<p>Finally define <span class="math display">\begin{equation}\label{eq:def-Tstar}\begin{aligned}
T^\ast \equiv \bigcup_{i=1}^\infty T_i.

\end{aligned}\end{equation}</span> Then <span class="math inline">\(T^\ast\)</span>
is countable (countable union of finite sets). It is dense because for
any <span class="math inline">\(t\in T\)</span>, \eqref{eq:projection-net} gives <span
class="math inline">\(d(t,T_i)\le 2\delta_i\to 0\)</span>, hence <span
class="math inline">\(d(t,T^\ast)=0\)</span>.</p></li>
<li><p>Define “bad” events at each scale. For each <span
class="math inline">\(i\ge 1\)</span>, define the event <span class="math display">\begin{equation}\label{eq:def-Ai}\begin{aligned}
A_i
\equiv \left\{\exists\,u,v\in T_i:\ |Z(u)-Z(v)|&gt; D\, d(u,v)
H(\delta_i)\right\},

\end{aligned}\end{equation}</span> where <span
class="math inline">\(H(\cdot)\)</span> is defined in \eqref{eq:def-H}.</p></li>
<li><p>Bound <span class="math inline">\(\mathbf
P\,\,\!\!(A_i)\)</span>. Fix <span class="math inline">\(i\)</span>. For
any <em>fixed</em> pair <span class="math inline">\((u,v)\in T_i\times
T_i\)</span>, apply \eqref{eq:subg-increments} with <span
class="math display">\[\eta \equiv D H(\delta_i)\]</span> to obtain
<span class="math display">\begin{equation}\label{eq:pair-bound}\begin{aligned}
\mathbf P\,\,\!\!\left(|Z(u)-Z(v)|&gt; D H(\delta_i) d(u,v)\right)
&amp;\le 2\exp\left(-\frac{(D H(\delta_i))^2}{2D^2}\right)
=2\exp\left(-\frac{H(\delta_i)^2}{2}\right)
\nonumber\\
&amp;= 2\exp\left(-\log
\left(\frac{N(\delta_i)^2}{\delta_i}\right)\right)
=\frac{2\delta_i}{N(\delta_i)^2}.

\end{aligned}\end{equation}</span> Now take a union bound over all pairs in <span
class="math inline">\(T_i\times T_i\)</span>: <span class="math display">\begin{equation}\label{eq:PAi}\begin{aligned}
\mathbf P\,\,\!\!(A_i)
&amp;\le \sum_{(u,v)\in T_i\times T_i}\mathbf
P\,\,\!\!\left(|Z(u)-Z(v)|&gt; D\, d(u,v) H(\delta_i)\right)
\nonumber\\
&amp;\le |T_i|^2\cdot 2\frac{\delta_i}{N(\delta_i)^2}
\le N(\delta_i)^2\cdot 2\frac{\delta_i}{N(\delta_i)^2}
=2\delta_i.

\end{aligned}\end{equation}</span></p></li>
<li><p>Bound the union of bad events. By another union bound and \eqref{eq:PAi}, <span class="math display">\begin{equation}\label{eq:union-bad}\begin{aligned}
\mathbf P\,\,\!\!\left(\bigcup_{i=1}^\infty A_i\right)
\le \sum_{i=1}^\infty \mathbf P\,\,\!\!(A_i)
\le \sum_{i=1}^\infty 2\delta_i
=2\sum_{i=1}^\infty \delta_i
=2\varepsilon.

\end{aligned}\end{equation}</span> Define the “good” event <span
class="math display">\[G \equiv \left(\bigcup_{i=1}^\infty
A_i\right)^c.\]</span> On <span class="math inline">\(G\)</span>, for
every <span class="math inline">\(i\)</span> and all <span
class="math inline">\(u,v\in T_i\)</span>, <span class="math display">\begin{equation}\label{eq:good-scale-bound}\begin{aligned}
|Z(u)-Z(v)|\le D d(u,v) H(\delta_i).

\end{aligned}\end{equation}</span></p></li>
<li><p>Construct chains between nearby points in <span
class="math inline">\(T^\ast\)</span>. Let <span
class="math inline">\(s,t\in T^\ast\)</span> satisfy <span
class="math inline">\(d(s,t)\le\varepsilon\)</span>. Choose <span
class="math inline">\(m\)</span> large enough so that <span
class="math inline">\(s,t\in T_m\)</span> (possible since <span
class="math inline">\(T^\ast=\cup_i T_i\)</span> and the <span
class="math inline">\(T_i\)</span> are nested). Choose <span
class="math inline">\(n\ge 1\)</span> such that <span class="math display">\begin{equation}\label{eq:choose-n}\begin{aligned}
\delta_n\le d(s,t)\le 2\delta_n
\qquad\text{(equivalently, $\delta_{n-1}=2\delta_n\ge d(s,t)$).}

\end{aligned}\end{equation}</span> Define a chain <span
class="math inline">\(\{s_k\}_{k=n}^m\)</span> by setting <span
class="math inline">\(s_m \equiv s\)</span> and recursively <span class="math display">\begin{equation}\label{eq:chain-s}\begin{aligned}
s_k \equiv \pi_k(s_{k+1})\in T_k,\qquad k=m-1,m-2,\dots,n,

\end{aligned}\end{equation}</span> and similarly define <span
class="math inline">\(\{t_k\}_{k=n}^m\)</span> with <span
class="math inline">\(t_m \equiv t\)</span> and <span
class="math inline">\(t_k \equiv \pi_k(t_{k+1})\)</span>. By \eqref{eq:projection-net} applied to
<span class="math inline">\(s_{k+1}\in T_{k+1}\subset T\)</span>, we
have <span class="math display">\begin{equation}\label{eq:chain-step-dist}\begin{aligned}
d(s_{k+1},s_k)\le 2\delta_k,\qquad
d(t_{k+1},t_k)\le 2\delta_k,
\qquad k=n,\dots,m-1.

\end{aligned}\end{equation}</span></p></li>
<li><p>By repeated application of triangle inequality, <span class="math display">\begin{equation}\label{eq:triangle-decomp}\begin{aligned}
|Z(s)-Z(t)|
&amp;=|Z(s_m)-Z(t_m)|
\nonumber\\
&amp;\le
|Z(s_n)-Z(t_n)|+\sum_{k=n}^{m-1}\left(|Z(s_{k+1})-Z(s_k)|+|Z(t_{k+1})-Z(t_k)|\right).

\end{aligned}\end{equation}</span></p></li>
<li><p>Control <span class="math inline">\(d(s_n,t_n)\)</span>. Again by
triangle inequality and \eqref{eq:chain-step-dist}, <span class="math display">\begin{equation}\label{eq:dsn-tn}\begin{aligned}
d(s_n,t_n)
&amp;\le
d(s,t)+\sum_{k=n}^{m-1}\left(d(s_{k+1},s_k)+d(t_{k+1},t_k)\right)
\nonumber\\
&amp;\le d(s,t)+\sum_{k=n}^{m-1} (2\delta_k+2\delta_k)
= d(s,t)+4\sum_{k=n}^{m-1}\delta_k
\nonumber\\
&amp;\le 2\delta_n + 4\sum_{k=n}^{\infty}\delta_k
\qquad\text{(by \eqref{eq:choose-n})}
\nonumber\\
&amp;=2\delta_n + 4\cdot \left(\delta_n+\delta_{n+1}+\cdots\right)
=2\delta_n+4\cdot (2\delta_n)
=10\delta_n,

\end{aligned}\end{equation}</span> where we used <span
class="math inline">\(\sum_{k=n}^\infty \delta_k =
\delta_n/(1-1/2)=2\delta_n\)</span>.</p></li>
<li><p>Bound the RHS of \eqref{eq:triangle-decomp} on <span
class="math inline">\(G\)</span>. Work on the event <span
class="math inline">\(G\)</span>; we have:</p>
<p><em>(a) The middle-scale term.</em> Since <span
class="math inline">\(s_n,t_n\in T_n\)</span>, apply \eqref{eq:good-scale-bound} with
<span class="math inline">\(i=n\)</span>: <span class="math display">\begin{equation}\label{eq:ZsnZtn}\begin{aligned}
|Z(s_n)-Z(t_n)|
\le D d(s_n,t_n) H(\delta_n)
\le 10D \delta_n H(\delta_n),

\end{aligned}\end{equation}</span> using \eqref{eq:dsn-tn}.</p>
<p><em>(b) The chaining increments.</em> For each <span
class="math inline">\(k\in\{n,\dots,m-1\}\)</span>, note that <span
class="math inline">\(s_k,s_{k+1}\in T_{k+1}\)</span> because <span
class="math inline">\(T_k\subset T_{k+1}\)</span>. Hence \eqref{eq:good-scale-bound} with
<span class="math inline">\(i=k+1\)</span> gives <span class="math display">\begin{equation}\label{eq:increment-s}\begin{aligned}
|Z(s_{k+1})-Z(s_k)|
\le D d(s_{k+1},s_k) H(\delta_{k+1})
\le 2D \delta_k H(\delta_{k+1}),

\end{aligned}\end{equation}</span> where we used <span
class="math inline">\(d(s_{k+1},s_k)\le 2\delta_k\)</span> from \eqref{eq:chain-step-dist}. Similarly,
<span class="math display">\begin{equation}\label{eq:increment-t}\begin{aligned}
|Z(t_{k+1})-Z(t_k)|
\le 2D \delta_k H(\delta_{k+1}).

\end{aligned}\end{equation}</span> Plugging \eqref{eq:ZsnZtn}–\eqref{eq:increment-t} into \eqref{eq:triangle-decomp} yields on
<span class="math inline">\(G\)</span>: <span class="math display">\begin{equation}\label{eq:pre-integral}\begin{aligned}
|Z(s)-Z(t)|
&amp;\le 10D \delta_n H(\delta_n)
+ \sum_{k=n}^{m-1}\left(2D \delta_k H(\delta_{k+1})+2D \delta_k
H(\delta_{k+1})\right)
\nonumber\\
&amp;=10D \delta_n H(\delta_n)+4D\sum_{k=n}^{m-1}\delta_k
H(\delta_{k+1})
\nonumber\\
&amp;\le 10D \delta_n H(\delta_n)+4D\sum_{k=n}^{\infty}\delta_k
H(\delta_{k+1}).

\end{aligned}\end{equation}</span></p></li>
<li><p>Convert the sums into the entropy integral. We now upper bound
the RHS of \eqref{eq:pre-integral} by a constant
times <span class="math inline">\(J(\delta_n)\)</span>. We use only the
monotonic envelope idea: replace <span
class="math inline">\(H(u)\)</span> by <span class="math inline">\(\bar
H(u) \equiv \sup_{0&lt;v\le u}H(v)\)</span>. Then <span
class="math inline">\(\bar H\)</span> is nonincreasing in <span
class="math inline">\(u\)</span> and <span
class="math inline">\(J(\delta)=\int_0^\delta H\le \int_0^\delta \bar
H\)</span>, so any bound in terms of <span class="math inline">\(\int
\bar H\)</span> implies the same bound for <span
class="math inline">\(J\)</span> (and we keep writing <span
class="math inline">\(H\)</span> for simplicity).</p>
<p><em>(a) Bound <span class="math inline">\(\delta_n
H(\delta_n)\)</span> by <span
class="math inline">\(J(\delta_n)\)</span>.</em> Since <span
class="math inline">\(H\)</span> is nonincreasing, <span class="math display">\begin{equation}\label{eq:deltaH-by-J}\begin{aligned}
J(\delta_n)=\int_0^{\delta_n}H(u)\,du
\ge \int_0^{\delta_n}H(\delta_n)\,du
=\delta_n H(\delta_n),

\end{aligned}\end{equation}</span> hence <span class="math display">\begin{equation}\label{eq:firstterm-by-J}\begin{aligned}
10D \delta_n H(\delta_n)\le 10D J(\delta_n).

\end{aligned}\end{equation}</span></p>
<p><em>(b) Bound <span class="math inline">\(\sum_{k=n}^{\infty}\delta_k
H(\delta_{k+1})\)</span> by a multiple of <span
class="math inline">\(J(\delta_{n+1})\)</span>.</em> For each <span
class="math inline">\(k\ge n\)</span>, note that <span
class="math inline">\(\delta_k=2(\delta_k-\delta_{k+1})\)</span> because
<span class="math inline">\(\delta_{k+1}=\delta_k/2\)</span>. Thus,
<span class="math display">\begin{equation}\label{eq:dyadic-integral-sandwich}\begin{aligned}
\delta_k H(\delta_{k+1})
&amp;=2(\delta_k-\delta_{k+1}) H(\delta_{k+1})
\le 2\int_{\delta_{k+1}}^{\delta_k} H(u)\,du

\end{aligned}\end{equation}</span> because <span class="math inline">\(H(u)\ge
H(\delta_{k+1})\)</span> for <span
class="math inline">\(u\in[\delta_{k+1},\delta_k]\)</span> when <span
class="math inline">\(H\)</span> is nonincreasing. Summing \eqref{eq:dyadic-integral-sandwich}
over <span class="math inline">\(k=n,n+1,\dots\)</span> telescopes the
intervals: <span class="math display">\begin{equation}\label{eq:sum-by-J}\begin{aligned}
\sum_{k=n}^{\infty}\delta_k H(\delta_{k+1})
&amp;\le 2\sum_{k=n}^{\infty}\int_{\delta_{k+1}}^{\delta_k} H(u)\,du
=2\int_{0}^{\delta_n}H(u)\,du
=2J(\delta_n).

\end{aligned}\end{equation}</span> Therefore, <span class="math display">\begin{equation}\label{eq:secondterm-by-J}\begin{aligned}
4D\sum_{k=n}^{\infty}\delta_k H(\delta_{k+1})
\le 8D J(\delta_n).

\end{aligned}\end{equation}</span></p>
<p>Combining \eqref{eq:pre-integral}, \eqref{eq:firstterm-by-J}, and \eqref{eq:secondterm-by-J}, we
conclude that on <span class="math inline">\(G\)</span>, <span class="math display">\begin{equation}\label{eq:18-to-26}\begin{aligned}
|Z(s)-Z(t)|
\le (10D+8D)\,J(\delta_n)
=18D J(\delta_n)
\le 26D J(\delta_n),

\end{aligned}\end{equation}</span> and since <span class="math inline">\(d(s,t)\ge
\delta_n\)</span> by \eqref{eq:choose-n} and <span
class="math inline">\(J(\cdot)\)</span> is nondecreasing, <span class="math display">\begin{equation}\label{eq:J-monotone}\begin{aligned}
J(\delta_n)\le J(d(s,t)).

\end{aligned}\end{equation}</span> Hence on <span class="math inline">\(G\)</span>,
<span class="math display">\begin{equation}\label{eq:on-good}\begin{aligned}
|Z(s)-Z(t)|\le 26D J(d(s,t)).

\end{aligned}\end{equation}</span></p></li>
<li><p>Define the event <span class="math display">\[E \equiv
\left\{\exists\,s,t\in T^\ast\text{ with }d(s,t)\le \varepsilon\text{
and }|Z(s)-Z(t)|&gt;26D J(d(s,t))\right\}.\]</span> By \eqref{eq:on-good}, <span
class="math inline">\(E\subseteq G^c=\cup_{i=1}^\infty A_i\)</span>,
hence by \eqref{eq:union-bad}, <span
class="math display">\[\mathbf P\,\,\!\!(E)\le \mathbf
P\,\,\!\!\left(\bigcup_{i=1}^\infty A_i\right)\le 2\varepsilon,\]</span>
which is exactly \eqref{eq:goal-prob}.</p></li>
<li><p>Replace <span class="math inline">\(T^\ast\)</span> by <span
class="math inline">\(T\)</span> under sample continuity. Assume <span
class="math inline">\(Z\)</span> has <span
class="math inline">\(d\)</span>-continuous sample paths, i.e. for
almost every <span class="math inline">\(\omega\)</span>, <span
class="math inline">\(t_m\to t\)</span> in <span
class="math inline">\(d\)</span> implies <span
class="math inline">\(Z(t_m,\omega)\to Z(t,\omega)\)</span>. Let <span
class="math inline">\(s,t\in T\)</span> with <span
class="math inline">\(d(s,t)\le \varepsilon\)</span>. Because <span
class="math inline">\(T^\ast\)</span> is dense, choose sequences <span
class="math inline">\(s^{(r)},t^{(r)}\in T^\ast\)</span> such that <span
class="math inline">\(d(s^{(r)},s)\to 0\)</span> and <span
class="math inline">\(d(t^{(r)},t)\to 0\)</span>. Then <span
class="math inline">\(d(s^{(r)},t^{(r)})\to d(s,t)\)</span> by the
triangle inequality, and by continuity, <span
class="math display">\[|Z(s^{(r)})-Z(t^{(r)})|\to |Z(s)-Z(t)|.\]</span>
Also, by monotone convergence of the integral defining <span
class="math inline">\(J\)</span> and continuity of <span
class="math inline">\(d\)</span>, <span
class="math inline">\(J(d(s^{(r)},t^{(r)}))\to J(d(s,t))\)</span>. Thus
the bound \eqref{eq:on-good} for <span
class="math inline">\((s^{(r)},t^{(r)})\)</span> passes to the limit and
holds for <span class="math inline">\((s,t)\)</span>. Therefore \eqref{eq:goal-prob} remains valid with
<span class="math inline">\(T^\ast\)</span> replaced by <span
class="math inline">\(T\)</span>.</p></li>
</ol>
<p>This concludes the proof. ◻</p>
</div>
<h2 id="maximal-inequalities-via-uniform-entropy-and-bracketing">Maximal
Inequalities via Uniform Entropy and Bracketing</h2>
<p>We also have sufficient tools now to investigate the following
empirical process of interest, which is usually written as <span
class="math display">\[\begin{aligned}
    \mathbb G_n (f) = \sqrt{n} (\widehat P_n - \mathbf P\,\,\!\!)(f)
~~\text{for } f \in \mathcal F ~,
\end{aligned}\]</span>] where <span class="math inline">\(\mathcal
F\)</span> is some function class. For any such function class defined
on <span class="math inline">\(\mathscr X\)</span>, and specifically
real-valued functions, the following object will be useful. The <span
class="math inline">\(L^2(\widehat P_n)\)</span>-seminorm defined for
all <span class="math inline">\(f \in \mathcal F\)</span> has the
following formula: <span class="math display">\[\begin{aligned}
    \lVert f \rVert_{\widehat P_n, 2}^2 = \frac1n \sum_{1 \leq k \leq n}
f(X_k)^2 ~.
\end{aligned}\]</span> To investigate if a function class is large or
small, it makes sense to want to link the idea of the entropy integral
to the function class somehow. For example, suppose <span
class="math inline">\(\mathcal F\)</span> is a (measurable) uniformly
bounded class of functions; we should be able to control the behaviour
of <span class="math inline">\(\lVert \mathbb G_n \rVert_{\mathcal
F}\)</span> via its uniform bound (i.e. by the envelope of <span
class="math inline">\(\mathcal F\)</span>) times some potentially large
“constants”. Of course, this is a dream: we can’t expect this to be true
without some other conditions that restricts the size of the function
class. We should at least expect the metric entropy (and therefore the
covering number) to be finite. But it turns out a condition that
captures this heuristic is a bit more formidable looking. It’s referred
to as the <em>uniform entropy condition</em>.</p>
<p>Suppose a function class <span class="math inline">\(\mathcal
F\)</span> has a measurable envelope function <span
class="math inline">\(F\)</span>. Add the constant function <span
class="math inline">\(f \equiv 0\)</span> to <span
class="math inline">\(\mathcal F\)</span>. Define the <em>uniform
entropy integral</em> as <span class="math display">\[\begin{aligned}
    J (\delta, \mathcal F, F) \triangleq \int_0^\delta \sup_{R}
\sqrt{\log N(\varepsilon \lVert F \rVert_{R,2}, \mathcal F \cup \{0\},
\lVert \cdot \rVert_{R,2})} \mathrm{d} \varepsilon
\end{aligned}\]</span> for any <span class="math inline">\(\delta &gt;
0\)</span>. Here, the supremum is taken over all discrete probability
measures <span class="math inline">\(R\)</span> on <span
class="math inline">\(\mathscr X\)</span> (with finitely many nonzero
values), with <span class="math inline">\(\lVert F \rVert_{R,2} = \int
F^2 \mathrm{d} R &gt; 0\)</span>. The <em>uniform entropy condition</em> is
(checking whether) <span class="math inline">\(J(1, \mathcal F, F) &lt;
\infty\)</span>. For this condition to have the possibility of holding
true, <span class="math inline">\(\mathcal F\)</span> must have finite
covering number for all <span class="math inline">\(\varepsilon &gt;
0\)</span>. That is not quite enough, since the integral can still
diverge at <span class="math inline">\(\infty\)</span>. Therefore, we
need to look at the behaviour as <span class="math inline">\(\varepsilon
\to 0\)</span> in the definition of the integral. Before embarking on
determining this condition for some nonparametric function classes, we
first understand why this condition is useful.</p>
<div id="thm:maximal-inequality-uniform-entropy" class="theorem">
<p><strong>Theorem 25</strong>. Suppose <span
class="math inline">\(\mathcal F\)</span> is a function class with a
measurable envelope function <span class="math inline">\(F\)</span>.
Then, for <span class="math inline">\(m_n \triangleq \sup_{f \in
\mathcal F} \frac{\lVert f \rVert_{\widehat P_n, 2}}{\lVert F
\rVert_{\widehat P_n, 2}}\)</span>, <span
class="math display">\[\begin{aligned}
        \mathbb E \lVert \mathbb G_n \rVert_{\mathcal F} \lesssim
\mathbb E [ J(m_n, \mathcal F, F) \lVert F \rVert_{\widehat P_n, 2}]
\lesssim J(1, \mathcal F, F) \lVert F \rVert_{\mathbf P\,\,\!\!, 2} ~.
    
\end{aligned}\]</span></p>
</div>
<div class="remark">
<p><strong>Remark 26</strong>. Since <span class="math inline">\(m_n
\leq 1\)</span>, the second inequality makes sense. But there are still
a lot of moving parts in this statement. Two of them may seem
problematic at first sight. First, <span
class="math inline">\(m_n\)</span> is random, as it is expressed in
terms of the <span class="math inline">\(L^2(\widehat P_n)\)</span>
seminorm. Second, <span class="math inline">\(\lVert F \rVert_{\widehat
P_n, 2}\)</span> is random, so it is unclear how to <em>a priori</em>
bound it above by <span class="math inline">\(\lVert F \rVert_{\mathbf
P\,\,\!\!, 2}\)</span>.</p>
</div>
<div class="proof">
<p><em>Proof of Theorem <a
href="#thm:maximal-inequality-uniform-entropy" data-reference-type="ref"
data-reference="thm:maximal-inequality-uniform-entropy">25</a>.</em> The
symmetrization inequality of Proposition <a
href="{% post_url 2026-06-15-fundamental-techniques %}#prop:symmetrization-bound" data-reference-type="ref"
data-reference="prop:symmetrization-bound">[prop:symmetrization-bound]</a>
implies it is sufficient to to look at the symmetrized process <span
class="math inline">\(\frac{1}{\sqrt{n}} \sum_{1 \leq k \leq n}
\varepsilon_k f(X_k)\)</span>, where <span
class="math inline">\(\varepsilon_1, \dots, \varepsilon_n\)</span> are
i.i.d. Rademacher random variables that are independent of <span
class="math inline">\(X_1, \dots, X_n\)</span>. Let us write <span
class="math inline">\(\mathbb G_n^{\rm sym} (f) = \frac{1}{\sqrt{n}}
\sum_{1 \leq k \leq n} \varepsilon_k f(X_k)\)</span>. Conditional on
<span class="math inline">\(X_1, \dots, X_n\)</span>, it is clear that
by the discussion in Example <a href="{% post_url 2026-06-15-fundamental-techniques %}#eg:rademacher-subgaussian"
data-reference-type="ref"
data-reference="eg:rademacher-subgaussian">[eg:rademacher-subgaussian]</a>
that <span class="math inline">\(\mathbb G_n^{\rm sym}\)</span> is
subgaussian under <span class="math inline">\(\lVert \cdot
\rVert_{\widehat P_n, 2}\)</span>, i.e. <span
class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!\left( \Bigg| \frac{1}{\sqrt{n}} \sum_{1 \leq k
\leq n} \varepsilon_k f(X_k) - \frac{1}{\sqrt{n}} \sum_{1 \leq k \leq n}
\varepsilon_k g(X_k) \Bigg| \geq t \,\,\Bigg|\,\, X_1, \dots, X_n
\right) \leq 2 e^{-\frac{t^2}{2 \lVert f-g \rVert_{\widehat P_n, 2}}} ~.
    
\end{aligned}\]</span> With respect to <span
class="math inline">\(\lVert \cdot \rVert_{\widehat P_n, 2}\)</span>, it
clearly follows that <span class="math inline">\(\sigma^2_{n,2}
\triangleq \sup_{f \in F} \lVert f \rVert_{\widehat P_n, 2}\)</span> is
an upper bound for the radius (squared) of the class <span
class="math inline">\(\mathcal F \cup \{0\}\)</span>. Therefore,
applying Dudley’s entropy bound, we have <span
class="math display">\[\begin{aligned}
        \mathbb E [ \lVert \mathbb G_n^{\rm sym} \rVert_{\widehat P_n,
2} \mid \varepsilon_1, \dots, \varepsilon_n ] &amp;\lesssim
\int_0^{\sigma_{n,2}} \sqrt{\log N(\varepsilon, F \cup \{0\}, \lVert
\cdot \rVert_{\widehat P_n, 2})} \mathrm{d} \varepsilon ~.
        \end{aligned}\]</span>

<p>Here, it should be understood that $X_1, \dots, X_n$
is fixed, and the metric entropy number is zero for any $\varepsilon
&gt; \sigma_{n,2</p>

<span class="math display">\[\begin{aligned}$ by the discussion above. The entropy is also random,
so we can make a change of variables to bound the right-hand side of the
inequality above by}
        &amp;= \lVert F \rVert_{\widehat P_n, 2} \int_0^{\sigma_{n,2} /
\lVert F \rVert_{\widehat P_n, 2}} \sqrt{\log N(\varepsilon \lVert F
\rVert_{\widehat P_n, 2}, F \cup \{0\}, \lVert \cdot \rVert_{\widehat
P_n, 2})} \mathrm{d} \varepsilon  \\
        &amp;\lesssim J(m_n, \mathcal F, F) \lVert F \rVert_{\widehat
P_n, 2} ~.
    
\end{aligned}\]</span> Since these statements hold for fixed <span
class="math inline">\(X_1, \dots, X_n\)</span>, it remains to take the
expectation of both sides of the inequality over <span
class="math inline">\(X_1,\dots, X_n\)</span> to conclude the first
inequality.</p>
<p>The fact that <span class="math inline">\(m_n \leq 1\)</span>
suggests <span class="math inline">\(J(m_n, \mathcal F, F) \leq J(1,
\mathcal F, F)\)</span>. Then, an application of Jensen’s inequality
shows that <span class="math inline">\(\mathbb E \lVert F
\rVert_{\widehat P_n, 2} \leq \lVert F \rVert_{\mathbf P\,\,\!\!,
2}\)</span>. The second inequality in the statement of the theorem then
follows directly. ◻</p>
</div>
<p>(1) <strong>Subgaussian tail: missing squares.</strong> For a
conditionally subgaussian increment with variance proxy <span
class="math inline">\(d_n(f,g)^2 := \|f-g\|_{\widehat P_n,2}^2\)</span>,
the tail must be <span class="math inline">\(\exp\{-t^2/(2
d_n(f,g)^2)\}\)</span>, not <span
class="math inline">\(\exp\{-t^2/(2\|f-g\|_{\widehat
P_n,2})\}\)</span>.</p>
<p>(2) <strong>Wrong conditioning in the Dudley step.</strong> One
should apply Dudley’s bound <em>conditional on the data</em> <span
class="math inline">\((X_1,\dots,X_n)\)</span>, taking expectation over
the Rademachers. The proof conditions on the Rademachers.</p>
<p>(3) <strong>Notation mismatch for the supremum norm.</strong> The
theorem concerns <span class="math inline">\(\|\mathbb G_n\|_{\mathcal
F}:=\sup_{f\in\mathcal F}|\mathbb G_n(f)|\)</span>, but the proof writes
<span class="math inline">\(\|\mathbb G_n^{\mathrm{sym}}\|_{\widehat
P_n,2}\)</span>, which is not a standard norm of a process. The Dudley
bound controls the <em>supremum</em> over <span
class="math inline">\(\mathcal F\)</span>.</p>
<p>(4) <strong>Radius/diameter.</strong> If one adjoins <span
class="math inline">\(0\)</span> to the class, the diameter is bounded
by <span class="math inline">\(2\sup_{f\in\mathcal F}\|f\|_{\widehat
P_n,2}\)</span>. Using <span class="math inline">\(\sigma_{n,2}\)</span>
vs. <span class="math inline">\(2\sigma_{n,2}\)</span> only changes
constants, but it should be stated cleanly.</p>
<p>(5) <strong>Indexing typo.</strong> <span
class="math inline">\(\sigma_{n,2}^2\)</span> should be <span
class="math inline">\(\sup_{f\in\mathcal F}\|f\|_{\widehat
P_n,2}^2\)</span> (not “<span class="math inline">\(f\in
F\)</span>”).</p>
<p>After fixing (1)–(5), the argument goes through and yields exactly
the displayed inequalities.</p>
<div class="proof">
<p><em>Corrected proof of Theorem <a
href="#thm:maximal-inequality-uniform-entropy" data-reference-type="ref"
data-reference="thm:maximal-inequality-uniform-entropy">25</a>.</em> Let
<span class="math inline">\(X_1,\dots,X_n \stackrel{\text{i.i.d.}}{\sim}
P\)</span> and <span class="math inline">\(\widehat
P_n:=n^{-1}\sum_{i=1}^n\delta_{X_i}\)</span>. Assume <span
class="math inline">\(\mathcal F\)</span> is pointwise measurable (or
otherwise measurable in the sense needed so that <span
class="math inline">\(\sup_{f\in\mathcal F}\)</span> is measurable), and
let <span class="math inline">\(F\)</span> be a measurable envelope with
<span class="math inline">\(P F^2&lt;\infty\)</span>.</p>
<p><strong>Step 1: symmetrization.</strong> Let <span
class="math inline">\(\varepsilon_1,\dots,\varepsilon_n\)</span> be
i.i.d. Rademacher, independent of <span
class="math inline">\((X_i)_{i=1}^n\)</span>, and define <span
class="math display">\[\mathbb G_n^{\mathrm{sym}}(f)
:=\frac1{\sqrt n}\sum_{i=1}^n \varepsilon_i f(X_i).\]</span> By the
usual symmetrization inequality, <span class="math display">\begin{equation}\label{eq:symm}
\EE\|\mathbb G_n\|_{\mathcal F}
\;\le\; 2\,\EE\|\mathbb G_n^{\mathrm{sym}}\|_{\mathcal F}.\end{equation}</span></p>
<p><strong>Step 2: conditional subgaussian increments under <span
class="math inline">\(L^2(\widehat P_n)\)</span>.</strong> Fix the data
<span class="math inline">\((X_1,\dots,X_n)\)</span> and define the
(random) pseudometric <span class="math display">\[d_n(f,g) :=
\|f-g\|_{\widehat P_n,2}=\Big(\widehat P_n (f-g)^2\Big)^{1/2}.\]</span>
For any <span class="math inline">\(f,g\in\mathcal F\)</span> and <span
class="math inline">\(t&gt;0\)</span>, conditional on <span
class="math inline">\((X_i)_{i=1}^n\)</span>, Hoeffding’s inequality (or
the mgf calculation for Rademachers) gives <span class="math display">\begin{equation}\label{eq:subg}
\PP\Big( |\mathbb G_n^{\mathrm{sym}}(f)-\mathbb G_n^{\mathrm{sym}}(g)|
\ge t \,\Big|\, X_1,\dots,X_n\Big)
\;\le\; 2\exp\Big(-\frac{t^2}{2 d_n(f,g)^2}\Big).\end{equation}</span> Thus,
conditional on <span class="math inline">\((X_i)\)</span>, <span
class="math inline">\(\{\mathbb G_n^{\mathrm{sym}}(f):f\in\mathcal
F\}\)</span> is a subgaussian process with respect to <span
class="math inline">\(d_n\)</span>.</p>
<p><strong>Step 3: Dudley’s entropy integral (conditional).</strong> Let
<span class="math inline">\(\mathcal F_0:=\mathcal F\cup\{0\}\)</span>.
Define the conditional radius <span class="math display">\[\sigma_n :=
\sup_{f\in\mathcal F}\|f\|_{\widehat P_n,2}.\]</span> Then <span
class="math inline">\(\mathrm{diam}(\mathcal F_0,d_n)\le
2\sigma_n\)</span>. Applying Dudley’s bound for subgaussian processes
(conditional on the data), there exists a universal constant <span
class="math inline">\(C&gt;0\)</span> such that <span class="math display">\begin{equation}\label{eq:dudley}
\EE\Big[\|\mathbb G_n^{\mathrm{sym}}\|_{\mathcal
F}\,\Big|\,X_1,\dots,X_n\Big]
\;\le\;
C\int_0^{2\sigma_n}\sqrt{\log N(\varepsilon,\mathcal
F_0,d_n)}\,d\varepsilon.\end{equation}</span> (The factor <span
class="math inline">\(2\)</span> can be absorbed into the implicit
constant in <span class="math inline">\(\lesssim\)</span>.)</p>
<p><strong>Step 4: normalize by the envelope and identify <span
class="math inline">\(m_n\)</span>.</strong> Since <span
class="math inline">\(|f|\le F\)</span> pointwise, <span
class="math inline">\(\sigma_n\le \|F\|_{\widehat P_n,2}\)</span>, and
hence <span class="math display">\[m_n \;:=\;\sup_{f\in\mathcal
F}\frac{\|f\|_{\widehat P_n,2}}{\|F\|_{\widehat P_n,2}}
\;=\;\frac{\sigma_n}{\|F\|_{\widehat P_n,2}}
\;\le\;1.\]</span> Make the change of variables <span
class="math inline">\(\varepsilon = u\,\|F\|_{\widehat P_n,2}\)</span>
in \eqref{eq:dudley}: <span
class="math display">\[\begin{aligned}
\int_0^{2\sigma_n}\sqrt{\log N(\varepsilon,\mathcal
F_0,d_n)}\,d\varepsilon
&amp;=
\|F\|_{\widehat P_n,2}\int_0^{2\sigma_n/\|F\|_{\widehat P_n,2}}
\sqrt{\log N(u\|F\|_{\widehat P_n,2},\mathcal F_0,d_n)}\,du \\
&amp;\lesssim
\|F\|_{\widehat P_n,2}\, J(m_n,\mathcal F,F),
\end{aligned}\]</span> where <span
class="math inline">\(J(\cdot,\mathcal F,F)\)</span> is the uniform
entropy integral corresponding to the normalized scale (the factor <span
class="math inline">\(2\)</span> is absorbed into <span
class="math inline">\(\lesssim\)</span> and/or into the definition of
<span class="math inline">\(J\)</span>; either convention is fine).</p>
<p>Therefore, combining with \eqref{eq:dudley}
and then taking expectations over <span
class="math inline">\((X_i)\)</span> and using \eqref{eq:symm},
<span class="math display">\[\EE\|\mathbb G_n\|_{\mathcal F}
\;\lesssim\;
\EE\Big[J(m_n,\mathcal F,F)\,\|F\|_{\widehat P_n,2}\Big],\]</span> which
is the first inequality.</p>
<p><strong>Step 5: deterministic upper bound.</strong> Since <span
class="math inline">\(m_n\le 1\)</span> and <span
class="math inline">\(\delta\mapsto J(\delta,\mathcal F,F)\)</span> is
nondecreasing, <span class="math display">\[J(m_n,\mathcal F,F)\le
J(1,\mathcal F,F)\quad\text{a.s.}\]</span> Hence <span
class="math display">\[\EE\Big[J(m_n,\mathcal F,F)\,\|F\|_{\widehat
P_n,2}\Big]
\;\le\;
J(1,\mathcal F,F)\,\EE\|F\|_{\widehat P_n,2}.\]</span> Finally, by
concavity of <span class="math inline">\(\sqrt{\cdot}\)</span> (Jensen),
<span class="math display">\[\EE\|F\|_{\widehat P_n,2}
=\EE\sqrt{\widehat P_n F^2}
\;\le\;
\sqrt{\EE[\widehat P_n F^2]}
=\sqrt{P F^2}
=\|F\|_{P,2}.\]</span> Therefore, <span
class="math display">\[\EE\Big[J(m_n,\mathcal F,F)\,\|F\|_{\widehat
P_n,2}\Big]
\;\le\;
J(1,\mathcal F,F)\,\|F\|_{P,2},\]</span> which is the second
inequality. ◻</p>
</div>
<div id="rem:g-c-uniform-entropy" class="remark">
<p><strong>Remark 27</strong> (Revisiting Remark <a
href="#rem:g-c-concentration" data-reference-type="ref"
data-reference="rem:g-c-concentration">5</a>). Consider studying the
function class <span class="math inline">\(\mathcal F\)</span> of <span
class="math inline">\(M\)</span>-uniformly bounded functions such that
we have the following bound on the random entropy number: <span
class="math display">\[\begin{aligned}
        N (\varepsilon, \mathcal F, \lVert \cdot \rVert_{\mathbf
P\,\,\!\!, 2}) \leq C \delta (16e)^\delta
\frac{B^{2\delta}}{\varepsilon^{2\delta}} ~.
    
\end{aligned}\]</span> We can then study the expectation of <span
class="math inline">\(\sup_{f \in \mathcal F} |\widehat P_n f - \mathbf
P\,\,\!\!f|\)</span>. By symmetrization and concentration results, we
can then focus on studying <span class="math inline">\(\mathbb E
[\sup_{f \in \mathcal F} |\frac1n \sum_{1 \leq k \leq n} \varepsilon_k
f(X_k)| \mid \varepsilon_1, \dots, \varepsilon_n|]\)</span> for fixed
realizations of <span class="math inline">\(X_1, \dots, X_n\)</span>. In
particular, consider the stochastic process <span
class="math inline">\(\{ \mathbb G_n f : f \in \mathcal F \}\)</span>,
where <span class="math inline">\(\mathbb G_n f \triangleq
\frac{1}{\sqrt{n}} \sum_{1 \leq k \leq n} \varepsilon_k f(X_k)\)</span>.
By earlier concentration results, we have that <span
class="math inline">\(\mathbb G_n (f - h)\)</span> is subgaussian. It
then follows from Dudley’s entropy bound that <span
class="math display">\[\begin{aligned}
        \mathbb E \Bigg[ \sup_{f \in \mathcal F} \Bigg|\frac1n \sum_{1
\leq k \leq n} \varepsilon_k f(X_k)\Bigg| \,\,\Bigg|\,\, \varepsilon_1,
\dots, \varepsilon_n \Bigg] &amp;\lesssim \frac{24}{\sqrt{n}} \int_0^M
\sqrt{\log N(\varepsilon, F \cup \{0\}, \lVert \cdot \rVert_{\widehat
P_n, 2})} \mathrm{d} \varepsilon ~, \\
        \end{aligned}\]</span>

<p>so that, by applying the assumption on the random
entropy number, we have</p>

<span class="math display">\[\begin{aligned}
        &amp;\leq \frac{c_0}{\sqrt{n}} \int_0^M \sqrt{\log \left( 1 +
\frac{c B^{2\delta}}{\varepsilon^{2\delta}} \right)} \mathrm{d} \varepsilon \\
        &amp;= M \int_0^1 \sqrt{\log \left( 1 +
\frac{c}{\varepsilon^{2\delta}} \right)} \mathrm{d} \varepsilon \\
        &amp;\lesssim M\sqrt{\delta} \int_0^1 \sqrt{\log
\frac{1}{\varepsilon}} \mathrm{d} \varepsilon \lesssim M C_0
\sqrt{\frac{\delta}{n}} ~,
    
\end{aligned}\]</span> where <span class="math inline">\(c_0\)</span>,
<span class="math inline">\(C_0\)</span>, and <span
class="math inline">\(c\)</span> are constants. Therefore, we have <span
class="math display">\[\begin{aligned}
        \mathbb E \sup_{f \in \mathcal F} |\widehat P_n f - \mathbf
P\,\,\!\!f| \lesssim_M \sqrt{\frac{\delta}{n}} ~.
    
\end{aligned}\]</span> This gives us yet another way to understand the
behaviour of the expectation of supremum of uniformly bounded functions
(of random variables).</p>
</div>
<p>A result that may be useful if we know information about <span
class="math inline">\(\lVert F \rVert_{\mathbf P\,\,\!\!, 2}\)</span> is
the following.</p>
<div
id="thm:maximal-inequality-uniform-entropy-integral-uniform-boundedness"
class="theorem">
<p><strong>Theorem 28</strong>. Suppose <span class="math inline">\(0
&lt; \lVert F \rVert_{\mathbf P\,\,\!\!, 2} &lt; \infty\)</span>, and
let <span class="math inline">\(\sigma^2 &gt; 0\)</span> be any positive
constant such that <span class="math inline">\(\sup_{f \in \mathcal F} P
f^2 \leq \sigma^2 \leq \lVert F \rVert_{\mathbf P\,\,\!\!,
2}^2\)</span>. Set <span class="math inline">\(\delta =
\frac{\sigma}{\lVert F \rVert_{\mathbf P\,\,\!\!, 2}}\)</span> and <span
class="math inline">\(M = \sqrt{\mathbb E \sup_{1 \leq k \leq n}
F(X_i)^2}\)</span>. Then, <span class="math display">\[\begin{aligned}
        \mathbb E \lVert \mathbb G_n \rVert_{\mathcal F} \lesssim
J(\delta, \mathcal F, F) \lVert F \rVert_{\mathbf P\,\,\!\!, 2} +
\frac{M J(\delta, \mathcal F, F)^2}{\delta^2 \sqrt{n}} ~.
    
\end{aligned}\]</span></p>
</div>
<p>There are maximal inequalities that use bracketing numbers. However,
the difficulty here is reversed from earlier: it is easier to use
bracketing to prove the Glivenko-Cantelli theorem but much harder to use
covering arguments. Here, bracketing results are much more difficult to
prove. One of the major difficulties come from the fact that bracketing
provides pointwise control: a bracket <span
class="math inline">\([l,u]\)</span> requires <span
class="math inline">\(l \leq u\)</span> pointwise (for all <span
class="math inline">\(x \in \mathscr X\)</span>). In giving up pointwise
control, the maximal inequalities using metric entropy were derived by
considering <em>all</em> measures <span
class="math inline">\(R\)</span>, and taking the supremum over all such
<span class="math inline">\(R\)</span> supported on realizations of
<span class="math inline">\(f(X_1), \dots, f(X_n)\)</span>.</p>
<p>Because we have pointwise control, we can look at the <em>bracketing
integral</em>, defined as <span class="math display">\[\begin{aligned}
    J_{[\:]} (\delta, \mathcal F, \lVert \cdot \rVert_{\mathbf
P\,\,\!\!, 2}) = \int_0^\delta \sqrt{\log N_{[\:]} (\varepsilon,
\mathcal F \cup \{0\}, \lVert \cdot \rVert_{\mathbf P\,\,\!\!, 2})} \mathrm{d}
\varepsilon ~.
\end{aligned}\]</span> The following result, while it looks innocuous,
is difficult to prove directly.</p>
<div id="thm:maximal-inequality-bracketing-integral" class="theorem">
<p><strong>Theorem 29</strong>. Suppose <span
class="math inline">\(\mathcal F\)</span> is a function class with a
measurable envelope function <span class="math inline">\(F\)</span>.
Then, <span class="math display">\[\begin{aligned}
        \mathbb E \lVert \mathbb G_n \rVert_{\mathcal F} \lesssim
J_{[\:]}(\lVert F \rVert_{\mathbf P\,\,\!\!, 2}, \mathcal F, \lVert
\cdot \rVert_{\mathbf P\,\,\!\!, 2}) ~.
    
\end{aligned}\]</span></p>
</div>
<p>However, we note that Theorem <a
href="#thm:maximal-inequality-bracketing-integral"
data-reference-type="ref"
data-reference="thm:maximal-inequality-bracketing-integral">29</a> is a
straightforward consequence of the following result, which is elementary
in its statement but difficult to show.</p>
<div id="thm:maximal-inequality-bracketing-integral-prelim-behaviour"
class="theorem">
<p><strong>Theorem 30</strong>. Let <span class="math inline">\(\mathcal
F\)</span> be a function class of measurable functions <span
class="math inline">\(f : \mathscr X \to \mathbb R\)</span> such that
<span class="math inline">\(\mathbf P\,\,\!\!f^2 &lt; \delta^2\)</span>
for all <span class="math inline">\(f \in \mathcal F\)</span>. Let <span
class="math inline">\(F\)</span> be the envelope of <span
class="math inline">\(\mathcal F\)</span>. Then, with <span
class="math inline">\(a(\delta) \triangleq \frac{\delta}{\sqrt{\log
N_{[\:]} (\delta, \mathcal F, \lVert \cdot \rVert_{\mathbf P\,\,\!\!,
2})}}\)</span>, we have <span class="math display">\[\begin{aligned}
        \mathbb E \lVert \mathbb G_n \rVert_{\mathcal F} \lesssim
J_{[\:]}(\lVert F \rVert_{\mathbf P\,\,\!\!, 2}, \mathcal F, \lVert
\cdot \rVert_{\mathbf P\,\,\!\!, 2}) + \sqrt{n} \mathbf P\,\,\!\!F
\mathbb 1 \{ F &gt; \sqrt{n} a(\delta) \} ~.
    
\end{aligned}\]</span></p>
</div>
<p>The proof of Theorem <a
href="#thm:maximal-inequality-bracketing-integral-prelim-behaviour"
data-reference-type="ref"
data-reference="thm:maximal-inequality-bracketing-integral-prelim-behaviour">30</a>
relies on a majorization argument, which combines ingredients from
chaining and uses truncation cleverly.</p>
<div class="proof">
<p><em>Proof of Theorem <a
href="#thm:maximal-inequality-bracketing-integral-prelim-behaviour"
data-reference-type="ref"
data-reference="thm:maximal-inequality-bracketing-integral-prelim-behaviour">30</a>.</em>
Let <span class="math inline">\((X_i)_{i=1}^n\)</span> be i.i.d. with
law <span class="math inline">\(\mathbf P\,\,\!\!\)</span>, and let
<span class="math inline">\((\varepsilon_i)_{i=1}^n\)</span> be
i.i.d. Rademacher, independent of <span
class="math inline">\((X_i)_{i=1}^n\)</span>. Define <span
class="math display">\[\mathbb G_n f  \equiv  \frac{1}{\sqrt
n}\sum_{i=1}^n \varepsilon_i f(X_i),
  \qquad \|f\|_{P,2} \equiv (\mathbf P\,\,\!\!f^2)^{1/2}.\]</span>
Assume <span class="math inline">\(\mathbf P\,\,\!\!f^2\le
\delta^2\)</span> for all <span class="math inline">\(f\in\mathcal
F\)</span>, and let <span class="math inline">\(F\)</span> be an
envelope function, so that <span class="math inline">\(|f|\le F\)</span>
pointwise.</p>
<p>Define the bracketing number and integral (with <span
class="math inline">\(\mathcal F\cup\{0\}\)</span> absorbed into <span
class="math inline">\(\mathcal F\)</span> for brevity): <span
class="math display">\[N_{[\:]}(\varepsilon,\mathcal F \cup
\{0\},\|\cdot\|_{P,2}),
  \qquad
  J_{[\:]} (\delta, \mathcal F \cup \{0\}, \lVert \cdot \rVert_{\mathbf
P\,\,\!\!, 2}) = \int_0^\delta \sqrt{\log N_{[\:]} (\varepsilon,
\mathcal F \cup \{0\}, \lVert \cdot \rVert_{\mathbf P\,\,\!\!, 2})} \mathrm{d}
\varepsilon ~.\]</span> Define <span class="math display">\begin{equation}\label{eq:def-a-delta-corrected}
  a(\delta) \equiv
  \begin{cases}
    \displaystyle \frac{\delta}{\sqrt{\log N_{[\:]} (\delta, \mathcal F
\cup \{0\}, \lVert \cdot \rVert_{\mathbf P\,\,\!\!, 2})}} &amp; \text{if
} N_{[\:]} (\delta, \mathcal F \cup \{0\}, \lVert \cdot \rVert_{\mathbf
P\,\,\!\!, 2})\ge 2,\\[1em]
    +\infty &amp; \text{if } N_{[\:]} (\delta, \mathcal F \cup \{0\},
\lVert \cdot \rVert_{\mathbf P\,\,\!\!, 2})=1.
  \end{cases}\end{equation}</span> If <span class="math inline">\(N_{[\:]} (\delta,
\mathcal F \cup \{0\}, \lVert \cdot \rVert_{\mathbf P\,\,\!\!,
2})=1\)</span>, then <span
class="math inline">\(a(\delta)=\infty\)</span> and the tail term in the
theorem is <span class="math inline">\(0\)</span>; the bound is trivial.
Henceforth assume <span class="math inline">\(N_{[\:]} (\delta, \mathcal
F \cup \{0\}, \lVert \cdot \rVert_{\mathbf P\,\,\!\!, 2})\ge 2\)</span>
so that <span class="math inline">\(\log N_{[\:]} (\delta, \mathcal F
\cup \{0\}, \lVert \cdot \rVert_{\mathbf P\,\,\!\!,
2})&gt;0\)</span>.</p>
<ol>
<li><p>Envelope truncation and the tail term. Set the truncation level
<span class="math display">\[\tau \equiv \sqrt n a(\delta),\]</span> and
define, for each <span class="math inline">\(f\in\mathcal F\)</span>,
the truncated function <span class="math inline">\(f^\tau \equiv
f\mathbf 1\{F\le \tau\}\)</span> and tail part <span
class="math inline">\(f^{&gt;\tau} \equiv f\mathbf
1\{F&gt;\tau\}\)</span>.</p>
<p>Using the deterministic domination for Rademacher sums, <span
class="math display">\[|\mathbb G_n f^{&gt;\tau}|
  \le \frac{1}{\sqrt n}\sum_{i=1}^n |f(X_i)|\mathbf 1\{F(X_i)&gt;\tau\}
  \le \frac{1}{\sqrt n}\sum_{i=1}^n F(X_i)\mathbf 1\{F(X_i)&gt;\tau\}
  = \sqrt n\,P_n\left(F\mathbf 1\{F&gt;\tau\}\right),\]</span> we obtain
<span class="math display">\begin{equation}\label{eq:tail-bound-corrected}\begin{aligned}
  \mathbb E\sup_{f\in\mathcal F}|\mathbb G_n f^{&gt;\tau}|
  &amp;\le \mathbb E\left[\sqrt n\,P_n(F\mathbf 1\{F&gt;\tau\})\right]
   = \sqrt n\,P\left(F\mathbf 1\{F&gt;\tau\}\right).
  
\end{aligned}\end{equation}</span> Therefore <span class="math display">\begin{equation}\label{eq:reduce-to-truncated-class}
  \mathbb E\|\mathbb G_n\|_{\mathcal F}
  \le
  \mathbb E\|\mathbb G_n\|_{\mathcal F^\tau}
  + \sqrt n\,P\left(F\mathbf 1\{F&gt;\sqrt n
a(\delta)\}\right),\end{equation}</span> where <span class="math inline">\(\mathcal
F^\tau \equiv \{f^\tau:f\in\mathcal F\}\)</span>. Note that <span
class="math inline">\(\mathcal F^\tau\)</span> is pointwise bounded by
<span class="math inline">\(\tau\)</span>, and <span
class="math inline">\(N_{[\:]}(\varepsilon,\mathcal
F^\tau,\|\cdot\|_{P,2})\le N_{[\:]}(\varepsilon,\mathcal
F,\|\cdot\|_{P,2})\)</span> (since truncating bracket endpoints
preserves bracketing and does not increase <span
class="math inline">\(L^2(P)\)</span> width). Hence it remains to bound
<span class="math inline">\(\mathbb E\|\mathbb G_n\|_{\mathcal
F^\tau}\)</span> by <span
class="math inline">\(J_{[\:]}(\delta)\)</span>.</p></li>
<li><p>We will use the following elementary lemma.</p>
<div id="lem:finite-class-bernstein" class="lemma">
<p><strong>Lemma 31</strong>. Let <span class="math inline">\(\mathcal
H\)</span> be a finite set of measurable functions <span
class="math inline">\(h:\mathscr X\to\mathbb R\)</span>. Assume <span
class="math inline">\(\|h\|_{P,2}\le \sigma\)</span> and <span
class="math inline">\(\|h\|_\infty\le b\)</span> for all <span
class="math inline">\(h\in\mathcal H\)</span>. Then <span
class="math display">\[\mathbb E\sup_{h\in\mathcal H}|\mathbb G_n h|
  \lesssim \sigma\sqrt{\log|\mathcal H|} + \frac{b\log|\mathcal
H|}{\sqrt n}.\]</span></p>
</div>
<p><em>Proof of Lemma <a href="#lem:finite-class-bernstein"
data-reference-type="ref"
data-reference="lem:finite-class-bernstein">31</a>.</em> Fix <span
class="math inline">\(h\in\mathcal H\)</span> and define <span
class="math inline">\(\xi_i \equiv \varepsilon_i h(X_i)/\sqrt
n\)</span>. Then <span class="math inline">\(\mathbb
E[\xi_i]=0\)</span>, <span class="math inline">\(|\xi_i|\le b/\sqrt
n\)</span>, and <span class="math inline">\(\sum_{i=1}^n \mathbb
E[\xi_i^2]=\mathbb E[h(X)^2]\le \sigma^2\)</span>. Bernstein’s
inequality yields, for all <span class="math inline">\(t&gt;0\)</span>,
<span class="math display">\[\mathbb P\left(|\mathbb G_n h|&gt;t\right)
  \le
  2\exp \left(
    -\frac{t^2}{2\sigma^2 + \frac{2bt}{3\sqrt n}}
  \right).\]</span> By a union bound over <span
class="math inline">\(\mathcal H\)</span>, <span
class="math display">\[\mathbb P\left(\sup_{h\in\mathcal H}|\mathbb G_n
h|&gt;t\right)
  \le
  2|\mathcal H|\exp \left(
    -\frac{t^2}{2\sigma^2 + \frac{2bt}{3\sqrt n}}
  \right).\]</span> Integrating the tail, <span
class="math inline">\(\mathbb E[\sup_{h\in\mathcal H}|\mathbb G_n
h|]=\int_0^\infty \mathbb P(\sup|\mathbb G_n h|&gt;t)\,dt\)</span>, and
choosing the split point <span class="math inline">\(t_0 \equiv
c_1\sigma\sqrt{\log|\mathcal H|}+c_2\frac{b\log|\mathcal H|}{\sqrt
n}\)</span> with sufficiently large absolute constants <span
class="math inline">\(c_1,c_2\)</span>, one obtains the stated bound
(the computation is standard: for <span class="math inline">\(t\ge
t_0\)</span> the exponent dominates <span
class="math inline">\(\log|\mathcal H|\)</span>, making the remaining
integral bounded by a constant multiple of <span
class="math inline">\(t_0\)</span>). <span
class="math inline">\(\square\)</span></p></li>
<li><p>Construct a nested bracket tree. For integers <span
class="math inline">\(q\ge 0\)</span>, set the <span
class="math inline">\(L^2(P)\)</span>-scales <span
class="math display">\[\varepsilon_q \equiv 2^{-q}\delta,
  \qquad
  N_q \equiv N_{[\:]}(\varepsilon_q,\mathcal F^\tau,\|\cdot\|_{P,2}) \le
N_{[\:]}(\varepsilon_q).\]</span> For each <span
class="math inline">\(q\)</span>, choose a bracketing cover <span
class="math inline">\(\left\{[l_{q,j},u_{q,j}]\right\}_{j=1}^{N_q}\)</span>
such that for every <span class="math inline">\(f\in\mathcal
F^\tau\)</span> there exists <span class="math inline">\(j\)</span> with
<span class="math display">\[l_{q,j}\le f\le
u_{q,j}\quad\text{pointwise},
  \qquad
  P(u_{q,j}-l_{q,j})^2\le \varepsilon_q^2.\]</span> Let <span
class="math inline">\(\Delta_{q,j} \equiv u_{q,j}-l_{q,j}\ge
0\)</span>.</p>
<p><em>Nested selection.</em> We now select for each <span
class="math inline">\(f\in\mathcal F^\tau\)</span> a <em>nested</em>
sequence of brackets: choose <span class="math inline">\(j_0(f)\)</span>
such that <span
class="math inline">\(f\in[l_{0,j_0(f)},u_{0,j_0(f)}]\)</span>. Given
<span class="math inline">\(j_q(f)\)</span>, consider the subclass <span
class="math display">\[\mathcal F_{q,f} \equiv \left\{g\in\mathcal
F^\tau: l_{q,j_q(f)}\le g\le u_{q,j_q(f)}\right\}.\]</span> Bracket
<span class="math inline">\(\mathcal F_{q,f}\)</span> at scale <span
class="math inline">\(\varepsilon_{q+1}\)</span> using at most <span
class="math inline">\(N_{q+1}\)</span> brackets (because bracketing
numbers do not increase upon restricting the class), and choose one of
those brackets containing <span class="math inline">\(f\)</span>; call
its index <span class="math inline">\(j_{q+1}(f)\)</span>. This ensures
that <span
class="math display">\[[l_{q+1,j_{q+1}(f)},u_{q+1,j_{q+1}(f)}]\subseteq
[l_{q,j_q(f)},u_{q,j_q(f)}]\]</span> pointwise, hence the corresponding
widths satisfy the <em>pointwise monotonicity</em> <span class="math display">\begin{equation}\label{eq:Delta-monotone}
  0\le \Delta_{q+1,f}(x)\le \Delta_{q,f}(x)\quad\forall x,\end{equation}</span>
where we abbreviate <span class="math display">\[l_{q,f} \equiv
l_{q,j_q(f)},\quad u_{q,f} \equiv u_{q,j_q(f)},\quad \Delta_{q,f} \equiv
u_{q,f}-l_{q,f}.\]</span> Also, <span class="math display">\begin{equation}\label{eq:L2-width}
  P\Delta_{q,f}^2 \le \varepsilon_q^2 = 2^{-2q}\delta^2,\qquad \forall
q\ge 0,\ \forall f\in\mathcal F^\tau.\end{equation}</span> Define the canonical
projection <span class="math inline">\(\pi_q
f  \equiv  l_{q,f}\)</span>. Then <span class="math inline">\(0\le
f-\pi_q f\le \Delta_{q,f}\)</span> pointwise.</p>
<p><strong>Step 4 (define truncation thresholds and the chain
identity).</strong> Define for <span class="math inline">\(q\ge
0\)</span> the thresholds <span class="math display">\begin{equation}\label{eq:def-aq-corrected}
  a_q  \equiv  \frac{\varepsilon_q}{\sqrt{\log N_{q+1}}}
  = \frac{2^{-q}\delta}{\sqrt{\log N_{q+1}}}.\end{equation}</span> (We use <span
class="math inline">\(N_{q+1}\)</span> so that later <span
class="math inline">\(a_q\log N_q \le 2^{-q}\delta\sqrt{\log
N_{q+1}}\)</span>.)</p>
<p>For each <span class="math inline">\(f\in\mathcal F^\tau\)</span>
define the truncation indicators as <em>functions of <span
class="math inline">\(x\)</span></em>: <span class="math display">\[E_q
f  \equiv  \mathbf 1\{\Delta_{0,f}\le \sqrt n a_0,\ \Delta_{1,f}\le
\sqrt n a_1,\ \dots,\ \Delta_{q,f}\le \sqrt n a_q\},\]</span> and <span
class="math display">\[D_{q+1} f  \equiv  E_q f \times \mathbf
1\{\Delta_{q+1,f}&gt;\sqrt n a_{q+1}\}.\]</span> Because of the
pointwise monotonicity \eqref{eq:Delta-monotone}, the sets
<span class="math inline">\(\{D_{q+1} f=1\}\)</span> are disjoint in
<span class="math inline">\(q\)</span> (pointwise in <span
class="math inline">\(x\)</span>), and for each <span
class="math inline">\(x\)</span> either <span
class="math inline">\(\Delta_{q,f}(x)\le \sqrt n a_q\)</span> for all
<span class="math inline">\(q\)</span> (in which case <span
class="math inline">\(E_q f(x)=1\)</span> for all <span
class="math inline">\(q\)</span>), or there is a unique first index
<span class="math inline">\(q+1\)</span> for which <span
class="math inline">\(\Delta_{q+1,f}(x)&gt;\sqrt n a_{q+1}\)</span> (in
which case <span class="math inline">\(D_{q+1}f(x)=1\)</span>).</p>
<p>We now justify the chain decomposition. Fix <span
class="math inline">\(f\in\mathcal F^\tau\)</span> and <span
class="math inline">\(x\in\mathscr X\)</span>. If <span
class="math inline">\(D_{q+1}f(x)=1\)</span> for some <span
class="math inline">\(q\)</span>, then <span class="math inline">\(E_r
f(x)=1\)</span> for <span class="math inline">\(r\le q\)</span> and the
chain “stops” at level <span class="math inline">\(q+1\)</span>. If no
such <span class="math inline">\(q\)</span> exists, then <span
class="math inline">\(E_q f(x)=1\)</span> for all <span
class="math inline">\(q\)</span> and, since <span
class="math inline">\(\Delta_{q,f}(x)\downarrow 0\)</span> a.s. (see
below), we have <span class="math inline">\(\pi_q f(x)\to f(x)\)</span>
and the infinite telescoping sum converges to <span
class="math inline">\(f(x)-\pi_0 f(x)\)</span>.</p>
<p>Formally, because <span class="math inline">\(\Delta_{q,f}\downarrow
\Delta_{\infty,f}\)</span> pointwise and <span
class="math inline">\(P\Delta_{q,f}^2\to 0\)</span> by \eqref{eq:L2-width}, monotone convergence
gives <span class="math inline">\(P\Delta_{\infty,f}^2 =
\lim_{q\to\infty}P\Delta_{q,f}^2=0\)</span>, hence <span
class="math inline">\(\Delta_{\infty,f}=0\)</span> a.s. Thus <span
class="math inline">\(\Delta_{q,f}(x)\downarrow 0\)</span> for <span
class="math inline">\(\mathbf P\,\,\!\!\)</span>-a.e. <span
class="math inline">\(x\)</span> and therefore <span
class="math inline">\(\pi_q f(x)=l_{q,f}(x)\uparrow f(x)\)</span> for
<span class="math inline">\(\mathbf P\,\,\!\!\)</span>-a.e. <span
class="math inline">\(x\)</span>. Consequently, for <span
class="math inline">\(\mathbf P\,\,\!\!\)</span>-a.e. <span
class="math inline">\(x\)</span>, <span class="math display">\begin{equation}\label{eq:chain-identity-corrected}
  f-\pi_0 f
  =
  \sum_{q\ge 0}(\pi_{q+1}f-\pi_q f)\,E_q f
   +
  \sum_{q\ge 0}(f-\pi_{q+1}f)\,D_{q+1}f .\end{equation}</span></p></li>
<li><p>Apply <span class="math inline">\(\mathbb G_n\)</span> and bound
the two sums. Apply <span class="math inline">\(\mathbb G_n\)</span> to
\eqref{eq:chain-identity-corrected}
and take <span class="math inline">\(\sup_{f\in\mathcal F^\tau}\)</span>
and expectation. By the triangle inequality, <span class="math display">\begin{equation}\label{eq:bound-main-sum-start}\begin{aligned}
  \mathbb E\|\mathbb G_n\|_{\mathcal F^\tau}
  &amp;\le
  \mathbb E\sup_{f\in\mathcal F^\tau}|\mathbb G_n(\pi_0 f)|
  + \sum_{q\ge 0}\mathbb E\sup_{f\in\mathcal F^\tau}|\mathbb
G_n((\pi_{q+1}f-\pi_q f)E_q f)|
  \\
  &amp;\quad
  + \sum_{q\ge 0}\mathbb E\sup_{f\in\mathcal F^\tau}|\mathbb
G_n((f-\pi_{q+1}f)D_{q+1} f)|.
  \label{eq:bound-remainder-sum-start}
\end{aligned}\end{equation}</span></p>
<p><u>(A) The remainder sum (tail of bracket widths).</u> On <span
class="math inline">\(\{D_{q+1}f=1\}\)</span> we have <span
class="math inline">\(0\le f-\pi_{q+1}f \le \Delta_{q+1,f}\)</span>,
hence <span class="math display">\[|(f-\pi_{q+1}f)D_{q+1}f|
  \le \Delta_{q+1,f}\,\mathbf 1\{\Delta_{q+1,f}&gt;\sqrt n
a_{q+1}\}.\]</span> Using <span class="math inline">\(|\mathbb G_n h|\le
\sqrt n\,P_n|h|\)</span>, <span class="math display">\[\begin{aligned}
  \sup_{f\in\mathcal F^\tau}|\mathbb G_n((f-\pi_{q+1}f)D_{q+1} f)|
  &amp;\le \sqrt n\,P_n\left(\sup_{f\in\mathcal
F^\tau}\Delta_{q+1,f}\mathbf 1\{\Delta_{q+1,f}&gt;\sqrt n
a_{q+1}\}\right) \\
  &amp;\le \sqrt n\,\sup_{f\in\mathcal
F^\tau}P_n\left(\Delta_{q+1,f}\mathbf 1\{\Delta_{q+1,f}&gt;\sqrt n
a_{q+1}\}\right).
\end{aligned}\]</span> Taking expectations and using <span
class="math inline">\(\mathbb E P_n = P\)</span>, <span class="math display">\begin{equation}\label{eq:remainder-to-P}\begin{aligned}
  \mathbb E\sup_{f\in\mathcal F^\tau}|\mathbb G_n((f-\pi_{q+1}f)D_{q+1}
f)|
  &amp;\le \sqrt n\,\sup_{f\in\mathcal
F^\tau}P\left(\Delta_{q+1,f}\mathbf 1\{\Delta_{q+1,f}&gt;\sqrt n
a_{q+1}\}\right).
  
\end{aligned}\end{equation}</span> Now use the elementary inequality <span
class="math inline">\(x\mathbf 1\{x&gt;t\}\le x^2/t\)</span> for <span
class="math inline">\(x,t&gt;0\)</span>: <span
class="math display">\[\begin{aligned}
  P\left(\Delta_{q+1,f}\mathbf 1\{\Delta_{q+1,f}&gt;\sqrt n
a_{q+1}\}\right)
  &amp;\le \frac{1}{\sqrt n a_{q+1}}P\Delta_{q+1,f}^2
  \le \frac{\varepsilon_{q+1}^2}{\sqrt n a_{q+1}}
  \quad\text{by \eqref{eq:L2-width}.}
\end{aligned}\]</span> Plugging into \eqref{eq:remainder-to-P} gives <span class="math display">\begin{equation}\label{eq:remainder-bound-per-q}\begin{aligned}
  \mathbb E\sup_{f\in\mathcal F^\tau}|\mathbb G_n((f-\pi_{q+1}f)D_{q+1}
f)|
  &amp;\le \frac{\varepsilon_{q+1}^2}{a_{q+1}}
   = \varepsilon_{q+1}\sqrt{\log N_{q+2}}
   = 2^{-(q+1)}\delta\sqrt{\log N_{q+2}},
  
\end{aligned}\end{equation}</span> using \eqref{eq:def-aq-corrected}.
Therefore, <span class="math display">\begin{equation}\label{eq:remainder-sum-bound}
  \sum_{q\ge 0}\mathbb E\sup_{f\in\mathcal F^\tau}|\mathbb
G_n((f-\pi_{q+1}f)D_{q+1} f)|
  \lesssim
  \sum_{q\ge 0} 2^{-q}\delta\sqrt{\log N_{q+1}}.\end{equation}</span></p>
<p><u>(B) The main telescoping increments.</u> First note the pointwise
bound <span class="math display">\[|\pi_{q+1}f-\pi_q f|
  \le |f-\pi_q f| + |f-\pi_{q+1}f|
  \le \Delta_{q,f} + \Delta_{q+1,f}
  \le 2\Delta_{q,f},\]</span> using <span
class="math inline">\(\Delta_{q+1,f}\le\Delta_{q,f}\)</span>. On the set
<span class="math inline">\(\{E_q f=1\}\)</span> we have <span
class="math inline">\(\Delta_{q,f}\le \sqrt n a_q\)</span>, hence <span class="math display">\begin{equation}\label{eq:increment-infty}
  \|(\pi_{q+1}f-\pi_q f)E_q f\|_\infty \le 2\sqrt n a_q.\end{equation}</span> Also,
using <span class="math inline">\((u+v)^2\le 2u^2+2v^2\)</span>, <span
class="math display">\[\begin{aligned}
  P\left[(\pi_{q+1}f-\pi_q f)^2(E_q f)^2\right]
  &amp;\le P(\pi_{q+1}f-\pi_q f)^2
   \le P(\Delta_{q,f}+\Delta_{q+1,f})^2 \\
  &amp;\le 2\mathbf P\,\,\!\!\Delta_{q,f}^2 + 2\mathbf
P\,\,\!\!\Delta_{q+1,f}^2
   \le 2\varepsilon_q^2 + 2\varepsilon_{q+1}^2
   \le 4\varepsilon_q^2.
\end{aligned}\]</span> Thus, <span class="math display">\begin{equation}\label{eq:increment-L2}
  \|(\pi_{q+1}f-\pi_q f)E_q f\|_{P,2} \le 2\varepsilon_q =
2^{-(q-1)}\delta.\end{equation}</span></p>
<p>Next, we need a finite cardinality bound. Because the nested bracket
selection creates a tree, the number of distinct values that <span
class="math inline">\(\pi_q f\)</span> can take is at most <span
class="math display">\[\widetilde N_q  \equiv  \prod_{r=0}^q
N_r,\]</span> so the number of distinct increments <span
class="math inline">\((\pi_{q+1}f-\pi_q f)E_q f\)</span> is at most
<span class="math inline">\(|\mathcal H_q|\le \widetilde
N_{q+1}\)</span>. Therefore, applying Lemma <a
href="#lem:finite-class-bernstein" data-reference-type="ref"
data-reference="lem:finite-class-bernstein">31</a> with <span
class="math inline">\(\sigma \equiv 2\varepsilon_q\)</span> and <span
class="math inline">\(b \equiv 2\sqrt n a_q\)</span> yields <span class="math display">\begin{equation}\label{eq:increment-bound-raw}\begin{gathered}
  \mathbb E\sup_{f\in\mathcal F^\tau}|\mathbb G_n((\pi_{q+1}f-\pi_q
f)E_q f)|
  \lesssim (2\varepsilon_q)\sqrt{\log \widetilde N_{q+1}} +
\frac{(2\sqrt n a_q)\log \widetilde N_{q+1}}{\sqrt n}\\
  = 2\varepsilon_q\sqrt{\log \widetilde N_{q+1}} + 2a_q\log \widetilde
N_{q+1} ~.
  
\end{gathered}\end{equation}</span> Using <span class="math inline">\(\sqrt{\log
\widetilde N_{q+1}}\le \sum_{r=0}^{q+1}\sqrt{\log N_r}\)</span> and
<span class="math inline">\(a_q=\varepsilon_q/\sqrt{\log
N_{q+1}}\)</span> (hence <span class="math inline">\(a_q\log
N_{q+1}=\varepsilon_q\sqrt{\log N_{q+1}}\)</span>), we get <span
class="math display">\[\begin{aligned}
  a_q\log \widetilde N_{q+1}
  &amp;= a_q\sum_{r=0}^{q+1}\log N_r
   \le a_q\,(q+2)\,\log N_{q+1}
   = (q+2)\varepsilon_q\sqrt{\log N_{q+1}}.
\end{aligned}\]</span> Thus each increment satisfies, for an absolute
constant <span class="math inline">\(C\)</span>, <span class="math display">\begin{equation}\label{eq:increment-bound-per-q}
  \mathbb E\sup_{f\in\mathcal F^\tau}|\mathbb G_n((\pi_{q+1}f-\pi_q
f)E_q f)|
  \le C (q+2) \varepsilon_q\sqrt{\log N_{q+1}}.\end{equation}</span> Because <span
class="math inline">\(\varepsilon_q=2^{-q}\delta\)</span> decays
geometrically, the extra polynomial factor <span
class="math inline">\((q+2)\)</span> is harmless: indeed <span
class="math inline">\(\sum_{q\ge 0}(q+2)2^{-q}&lt;\infty\)</span>, so
<span class="math display">\begin{equation}\label{eq:increment-sum-bound}
  \sum_{q\ge 0}\mathbb E\sup_{f\in\mathcal F^\tau}|\mathbb
G_n((\pi_{q+1}f-\pi_q f)E_q f)|
  \lesssim
  \sum_{q\ge 0} 2^{-q}\delta\sqrt{\log N_{q+1}}.\end{equation}</span></p>
<p><u>(C) The base term <span class="math inline">\(\sup|\mathbb
G_n(\pi_0 f)|\)</span>.</u> The set <span class="math inline">\(\{\pi_0
f:f\in\mathcal F^\tau\}\)</span> has cardinality at most <span
class="math inline">\(N_0\)</span> (one bracket at scale <span
class="math inline">\(\delta\)</span> chooses one lower endpoint).
Moreover, <span class="math inline">\(|\pi_0 f|\le |f|\le \tau\)</span>
and <span class="math inline">\(\|\pi_0 f\|_{P,2}\le \|\pi_0
f-f\|_{P,2}+\|f\|_{P,2}\le \varepsilon_0+\delta=2\delta\)</span>.
Applying Lemma <a href="#lem:finite-class-bernstein"
data-reference-type="ref"
data-reference="lem:finite-class-bernstein">31</a> with <span
class="math inline">\(\sigma \equiv 2\delta\)</span> and <span
class="math inline">\(b \equiv \tau\)</span> gives <span
class="math display">\[\begin{aligned}
  \mathbb E\sup_{f\in\mathcal F^\tau}|\mathbb G_n(\pi_0 f)|
  &amp;\lesssim \delta\sqrt{\log N_0} + \frac{\tau\log N_0}{\sqrt n}
  = \delta\sqrt{\log N_0} + a(\delta)\log N_0.
\end{aligned}\]</span> Since <span
class="math inline">\(a(\delta)=\delta/\sqrt{\log N_{[\:]} (\delta,
\mathcal F \cup \{0\}, \lVert \cdot \rVert_{\mathbf P\,\,\!\!, 2})}\ge
\delta/\sqrt{\log N_0}\)</span> and <span class="math inline">\(N_0\le
N_{[\:]} (\delta, \mathcal F \cup \{0\}, \lVert \cdot \rVert_{\mathbf
P\,\,\!\!, 2})\)</span>, we have <span
class="math inline">\(a(\delta)\log N_0 \le \delta\sqrt{\log N_{[\:]}
(\delta, \mathcal F \cup \{0\}, \lVert \cdot \rVert_{\mathbf P\,\,\!\!,
2})} \lesssim \delta\sqrt{\log N_0}\)</span>, hence <span class="math display">\begin{equation}\label{eq:base-term-bound}
  \mathbb E\sup_{f\in\mathcal F^\tau}|\mathbb G_n(\pi_0 f)|
  \lesssim \delta\sqrt{\log N_{[\:]} (\delta, \mathcal F \cup \{0\},
\lVert \cdot \rVert_{\mathbf P\,\,\!\!, 2})}.\end{equation}</span></p></li>
<li><p>Convert the dyadic sum to the bracketing integral. Combine \eqref{eq:bound-main-sum-start}–\eqref{eq:bound-remainder-sum-start}
with \eqref{eq:remainder-sum-bound}, \eqref{eq:increment-sum-bound},
and \eqref{eq:base-term-bound} to obtain
<span class="math display">\begin{equation}\label{eq:dyadic-bound}
  \mathbb E\|\mathbb G_n\|_{\mathcal F^\tau}
  \lesssim
  \delta\sqrt{\log N_{[\:]} (\delta, \mathcal F \cup \{0\}, \lVert \cdot
\rVert_{\mathbf P\,\,\!\!, 2})}
   +
  \sum_{q\ge 0} 2^{-q}\delta\sqrt{\log
N_{[\:]}(2^{-(q+1)}\delta)}.\end{equation}</span> Let <span
class="math inline">\(\phi(\varepsilon) \equiv \sqrt{\log
N_{[\:]}(\varepsilon, \mathcal F \cup \{0\}, \lVert \cdot
\rVert_{\mathbf P\,\,\!\!, 2})}\)</span>, which is nonincreasing in
<span class="math inline">\(\varepsilon\)</span>. For <span
class="math inline">\(q\ge 0\)</span>, <span
class="math display">\[\int_{2^{-(q+1)}\delta}^{2^{-q}\delta}
\phi(\varepsilon) \mathrm{d} \varepsilon
  \ge (2^{-q}\delta-2^{-(q+1)}\delta)\,\phi(2^{-q}\delta)
  = 2^{-(q+1)}\delta\,\phi(2^{-q}\delta),\]</span> hence <span
class="math display">\[2^{-q}\delta\,\phi(2^{-q}\delta)
  \le 2\int_{2^{-(q+1)}\delta}^{2^{-q}\delta} \phi(\varepsilon) \mathrm{d}
\varepsilon.\]</span> Summing over <span class="math inline">\(q\ge
0\)</span> yields <span class="math display">\begin{equation}\label{eq:sum-to-integral}
  \sum_{q\ge 0} 2^{-q}\delta\,\phi(2^{-q}\delta)
  \lesssim \int_0^\delta \phi(\varepsilon) \mathrm{d} \varepsilon
  = J_{[\:]}(\delta, \mathcal F \cup \{0\}, \lVert \cdot \rVert_{\mathbf
P\,\,\!\!, 2}).\end{equation}</span> Also, <span
class="math inline">\(\delta\phi(\delta)\le
2\int_{\delta/2}^{\delta}\phi(\varepsilon) \mathrm{d} \varepsilon \le
2J_{[\:]}(\delta)\)</span>. Applying these to \eqref{eq:dyadic-bound} gives <span class="math display">\begin{equation}\label{eq:truncated-class-final}
  \mathbb E\|\mathbb G_n\|_{\mathcal F^\tau}
  \lesssim J_{[\:]}(\delta, \mathcal F \cup \{0\}, \lVert \cdot
\rVert_{\mathbf P\,\,\!\!, 2}).\end{equation}</span></p></li>
<li><p>Plug \eqref{eq:truncated-class-final}
into \eqref{eq:reduce-to-truncated-class}
and recall <span class="math inline">\(\tau=\sqrt n a(\delta)\)</span>:
<span class="math display">\[\mathbb E\|\mathbb G_n\|_{\mathcal F}
  \le
  \mathbb E\|\mathbb G_n\|_{\mathcal F^\tau}
  + \sqrt n\,P\left(F\mathbf 1\{F&gt;\sqrt n a(\delta)\}\right)
  \lesssim
  J_{[\:]}(\delta)
  + \sqrt n\,P\left(F\mathbf 1\{F&gt;\sqrt n
a(\delta)\}\right).\]</span> Finally, since <span
class="math inline">\(\delta\le \|F\|_{P,2}\)</span> and the bracketing
integral is increasing in its upper limit, <span
class="math inline">\(J_{[\:]}(\delta)\le
J_{[\:]}(\|F\|_{P,2})\)</span>, so the theorem’s stated bound (with
<span class="math inline">\(J_{[\:]}(\|F\|_{P,2})\)</span>) follows
immediately.</p></li>
</ol>
<p>This concludes the proof. ◻</p>
</div>
<div class="proof">
<p><em>Proof of Theorem <a
href="#thm:maximal-inequality-bracketing-integral"
data-reference-type="ref"
data-reference="thm:maximal-inequality-bracketing-integral">29</a>.</em>
Follows directly from Theorem <a
href="#thm:maximal-inequality-bracketing-integral-prelim-behaviour"
data-reference-type="ref"
data-reference="thm:maximal-inequality-bracketing-integral-prelim-behaviour">30</a>.
Set <span class="math inline">\(\delta \equiv \|F\|_{\mathbf
P\,\,\!\!,2}\)</span>. Since <span class="math inline">\(|f|\le
F\)</span> pointwise, we have <span class="math inline">\(\mathbf
P\,\,\!\!f^2\le \mathbf P\,\,\!\!F^2=\delta^2\)</span> for every <span
class="math inline">\(f\in\mathcal F\)</span>, so Theorem <a
href="#thm:maximal-inequality-bracketing-integral-prelim-behaviour"
data-reference-type="ref"
data-reference="thm:maximal-inequality-bracketing-integral-prelim-behaviour">30</a>
applies and yields <span class="math display">\begin{equation}\label{eq:prelim-applied}
    \mathbb E\|\mathbb G_n\|_{\mathcal F}
    \lesssim
    J_{[\:]}(\delta,\mathcal F,\|\cdot\|_{\mathbf P\,\,\!\!,2})
    +
    \sqrt n \mathbf P\,\,\!\!\left(F \mathbb{1}\{F&gt;\sqrt n
a(\delta)\}\right).\end{equation}</span> It remains to show that the tail term is
itself <span class="math inline">\(\lesssim J_{[\:]}(\delta,\mathcal
F,\|\cdot\|_{\mathbf P\,\,\!\!,2})\)</span>.</p>
<p>Let <span class="math inline">\(t \equiv \sqrt n a(\delta)\)</span>.
By Cauchy–Schwarz, <span class="math display">\[\mathbf P\,\,\!\!\left(F
\mathbb{1}\{F&gt;t\}\right)
    \le (\mathbf P\,\,\!\!F^2)^{1/2} \mathbf P\,\,\!\!(F&gt;t)^{1/2}
    = \delta \mathbf P\,\,\!\!(F&gt;t)^{1/2}.\]</span> By Markov’s
inequality applied to <span class="math inline">\(F^2\)</span>, <span
class="math display">\[\mathbf P\,\,\!\!(F&gt;t)\le \frac{\mathbf
P\,\,\!\!F^2}{t^2}=\frac{\delta^2}{t^2}.\]</span> Therefore <span
class="math display">\[\mathbf P\,\,\!\!\left(F
\mathbb{1}\{F&gt;t\}\right)\le \delta\cdot
\frac{\delta}{t}=\frac{\delta^2}{t}
    \implies
    \sqrt n \mathbf P\,\,\!\!\left(F \mathbb{1}\{F&gt;t\}\right)\le
\sqrt n\cdot \frac{\delta^2}{\sqrt n a(\delta)}
    =\frac{\delta^2}{a(\delta)} ~.\]</span> If <span
class="math inline">\(N_{[\:]}(\delta,\mathcal F,\|\cdot\|_{\mathbf
P\,\,\!\!,2})=1\)</span> then <span
class="math inline">\(a(\delta)=+\infty\)</span> and the tail term is
<span class="math inline">\(0\)</span>, so the desired bound is trivial.
Hence assume <span class="math inline">\(N_{[\:]}(\delta,\mathcal
F,\|\cdot\|_{\mathbf P\,\,\!\!,2})\ge 2\)</span>, so <span
class="math inline">\(\log N_{[\:]}(\delta,\mathcal
F,\|\cdot\|_{\mathbf P\,\,\!\!,2})&gt;0\)</span> and <span
class="math inline">\(a(\delta)&lt;\infty\)</span>. By the definition of
<span class="math inline">\(a(\delta)\)</span>, <span class="math display">\begin{equation}\label{eq:delta2-over-a}
    \frac{\delta^2}{a(\delta)}
    =
    \delta\,\sqrt{\log N_{[\:]}(\delta,\mathcal F,\|\cdot\|_{\mathbf
P\,\,\!\!,2})} ~.\end{equation}</span> Then, note that enlarging the class cannot
decrease the bracketing number: <span
class="math display">\[N_{[\:]}(\delta,\mathcal F,\|\cdot\|_{\mathbf
P\,\,\!\!,2})
    \le N_{[\:]}(\delta,\mathcal F\cup\{0\},\|\cdot\|_{\mathbf
P\,\,\!\!,2}) ~.\]</span> Hence <span class="math display">\[\sqrt{\log
N_{[\:]}(\delta,\mathcal F,\|\cdot\|_{\mathbf P\,\,\!\!,2})}
    \le
    \sqrt{\log N_{[\:]}(\delta,\mathcal F\cup\{0\},\|\cdot\|_{\mathbf
P\,\,\!\!,2})} ~.\]</span> Finally, <span
class="math inline">\(\varepsilon\mapsto N_{[\:]}(\varepsilon,\mathcal
F\cup\{0\},\|\cdot\|_{\mathbf P\,\,\!\!,2})\)</span> is nonincreasing
in <span class="math inline">\(\varepsilon\)</span>, so for every <span
class="math inline">\(\varepsilon\in(0,\delta]\)</span>, <span
class="math display">\[N_{[\:]}(\varepsilon,\mathcal
F\cup\{0\},\|\cdot\|_{\mathbf P\,\,\!\!,2})
    \ge N_{[\:]}(\delta,\mathcal F\cup\{0\},\|\cdot\|_{\mathbf
P\,\,\!\!,2}) ~,\]</span> and therefore <span
class="math display">\[\sqrt{\log N_{[\:]}(\varepsilon,\mathcal
F\cup\{0\},\|\cdot\|_{\mathbf P\,\,\!\!,2})}
    \ge
    \sqrt{\log N_{[\:]}(\delta,\mathcal F\cup\{0\},\|\cdot\|_{\mathbf
P\,\,\!\!,2})}.\]</span> Integrating this lower bound over <span
class="math inline">\(\varepsilon\in(0,\delta]\)</span> yields <span class="math display">\begin{equation}\label{eq:J-lower}
    J_{[\:]}(\delta,\mathcal F,\|\cdot\|_{\mathbf P\,\,\!\!,2})
    =
    \int_0^\delta \sqrt{\log N_{[\:]}(\varepsilon,\mathcal
F\cup\{0\},\|\cdot\|_{\mathbf P\,\,\!\!,2})}\,d\varepsilon
    \geq
    \delta\,\sqrt{\log N_{[\:]}(\delta,\mathcal
F\cup\{0\},\|\cdot\|_{\mathbf P\,\,\!\!,2})}.\end{equation}</span> Combining \eqref{eq:delta2-over-a} and \eqref{eq:J-lower}, we obtain <span
class="math display">\[\sqrt n \mathbf P\,\,\!\!\left(F
\mathbb{1}\{F&gt;\sqrt n a(\delta)\}  \right)
    \le \frac{\delta^2}{a(\delta)}
    = \delta\,\sqrt{\log N_{[\:]}(\delta,\mathcal
F,\|\cdot\|_{\mathbf P\,\,\!\!,2})}
    \le \delta\,\sqrt{\log N_{[\:]}(\delta,\mathcal
F\cup\{0\},\|\cdot\|_{\mathbf P\,\,\!\!,2})}
    \le J_{[\:]}(\delta,\mathcal F,\|\cdot\|_{\mathbf
P\,\,\!\!,2}).\]</span> Insert this bound into \eqref{eq:prelim-applied} to conclude
<span class="math display">\[\mathbb E\|\mathbb G_n\|_{\mathcal F}
    \lesssim
    J_{[\:]}(\delta,\mathcal F,\|\cdot\|_{\mathbf P\,\,\!\!,2}) +
J_{[\:]}(\delta,\mathcal F,\|\cdot\|_{\mathbf P\,\,\!\!,2})
    \lesssim
    J_{[\:]}(\delta,\mathcal F,\|\cdot\|_{\mathbf
P\,\,\!\!,2}),\]</span> and recalling <span
class="math inline">\(\delta=\|F\|_{\mathbf P\,\,\!\!,2}\)</span>
completes the proof. ◻</p>
</div>
<h3 id="extensions">Extensions</h3>
<p>There are two more useful maximal inequalities that are based on the
bracketing integral. The proofs of these are not elementary; Chapter 1
of <span class="citation" data-cites="van_der_vaart_weak_2000"></span>
deals with these results.</p>
<div
id="thm:maximal-inequality-bracketing-integral-uniformly-bounded-class"
class="theorem">
<p><strong>Theorem 32</strong>. Let <span class="math inline">\(\mathcal
F\)</span> be a function class of measurable functions <span
class="math inline">\(f : \mathscr X \to \mathbb R\)</span> such that
<span class="math inline">\(\mathbf P\,\,\!\!f^2 &lt; \delta^2\)</span>
for all <span class="math inline">\(f \in \mathcal F\)</span>. Let <span
class="math inline">\(F\)</span> be the envelope of <span
class="math inline">\(\mathcal F\)</span>. Suppose <span
class="math inline">\(\lVert f \rVert_\infty \leq M\)</span> for every
<span class="math inline">\(f \in \mathcal F\)</span>. Then, <span
class="math display">\[\begin{aligned}
        \mathbb E \lVert \mathbb G_n \rVert_{\mathcal F} \lesssim
J_{[\:]}(\delta, \mathcal F, \lVert \cdot \rVert_{\mathbf P\,\,\!\!, 2})
\left( 1 + M \frac{J_{[\:]}(\delta, \mathcal F, \lVert \cdot
\rVert_{\mathbf P\,\,\!\!, 2})}{\delta^2 \sqrt{n}} \right) ~.
    
\end{aligned}\]</span></p>
</div>
<div
id="thm:maximal-inequality-bracketing-integral-bernstein-bounded-class"
class="theorem">
<p><strong>Theorem 33</strong>. Let <span class="math inline">\(\mathcal
F\)</span> be a function class of measurable functions <span
class="math inline">\(f : \mathscr X \to \mathbb R\)</span>. Let <span
class="math inline">\(F\)</span> be the envelope of <span
class="math inline">\(\mathcal F\)</span>. Define the <em>Bernstein
norm</em> <span class="math display">\[\begin{aligned}
        \lVert f \rVert_{P,B}^2 \triangleq 2 \mathbf P\,\,\!\!(e^{|f|} -
1 - |f|)
    
\end{aligned}\]</span> for any measurable function <span
class="math inline">\(f\)</span>. Suppose <span
class="math inline">\(\lVert f \rVert_{P,B} &lt; \delta\)</span> for
every <span class="math inline">\(f \in \mathcal F\)</span>. Then, <span
class="math display">\[\begin{aligned}
        \mathbb E \lVert \mathbb G_n \rVert_{\mathcal F} \lesssim
J_{[\:]}(\delta, \mathcal F, \lVert \cdot \rVert_{\mathbf P\,\,\!\!, B})
\left( 1 + \frac{J_{[\:]}(\delta, \mathcal F, \lVert \cdot
\rVert_{\mathbf P\,\,\!\!, B})}{\delta^2 \sqrt{n}} \right) ~.
    
\end{aligned}\]</span></p>
</div>
<div id="lem:symmetrization" class="lemma">
<p><strong>Lemma 34</strong> (Symmetrization). Let <span
class="math inline">\(\mathcal F\)</span> be a (countable, or otherwise
measurable) class of measurable <span class="math inline">\(f:\mathscr
X\to\mathbb R\)</span>. Let <span
class="math inline">\(\varepsilon_1,\dots,\varepsilon_n\)</span> be
i.i.d. Rademacher signs, independent of <span
class="math inline">\(X_1,\dots,X_n\)</span>. Then <span
class="math display">\[\mathbb E\Big[\big\|\mathbb G_n\big\|_{\mathcal
F}\Big]
\le  2\,\mathbb E\Big[\sup_{f\in\mathcal F}\Big|\frac1{\sqrt
n}\sum_{i=1}^n
\varepsilon_i f(X_i)\Big|\Big].\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> Write <span class="math inline">\(Z_f \equiv \sqrt
n(\widehat P_n - P)f = n^{-1/2}\sum_{i=1}^n (f(X_i)-\mathbf
P\,\,\!\!f)\)</span>. Let <span
class="math inline">\(X_1&#39;,\dots,X_n&#39;\)</span> be an
i.i.d. auxiliary sample, independent of everything, with the same law
<span class="math inline">\(\mathbf P\,\,\!\!\)</span>. Then for each
fixed <span class="math inline">\(f\)</span>, <span
class="math display">\[\mathbb E[Z_f] = 0,\qquad
Z_f = \frac1{\sqrt n}\sum_{i=1}^n\left(f(X_i)-\mathbb
E[f(X_i&#39;)]\right)
= \mathbb E&#39;\Big[\frac1{\sqrt
n}\sum_{i=1}^n\big(f(X_i)-f(X_i&#39;)\big)\Big],\]</span> where <span
class="math inline">\(\mathbb E&#39;\)</span> is expectation over the
auxiliary sample. By Jensen (outer expectation form if needed), <span
class="math display">\[\mathbb E\Big[\sup_{f\in\mathcal F}|Z_f|\Big]
\le \mathbb E\mathbb E&#39;\Big[\sup_{f\in\mathcal F}\Big|
\frac1{\sqrt
n}\sum_{i=1}^n\big(f(X_i)-f(X_i&#39;)\big)\Big|\Big].\]</span>
Conditioning on <span
class="math inline">\((X_i,X_i&#39;)_{i=1}^n\)</span>, the vector <span
class="math inline">\((f(X_i)-f(X_i&#39;))_{i=1}^n\)</span> is fixed,
and <span class="math display">\[\frac1{\sqrt
n}\sum_{i=1}^n\big(f(X_i)-f(X_i&#39;)\big)
\stackrel{d}{=}
\frac1{\sqrt n}\sum_{i=1}^n
\varepsilon_i\big(f(X_i)-f(X_i&#39;)\big),\]</span> hence <span
class="math display">\[\mathbb E\Big[\sup_{f\in\mathcal F}|Z_f|\Big]
\le \mathbb E\mathbb E&#39;\Big[\sup_{f\in\mathcal F}\Big|
\frac1{\sqrt n}\sum_{i=1}^n
\varepsilon_i\big(f(X_i)-f(X_i&#39;)\big)\Big|\Big].\]</span> Using
subadditivity of <span class="math inline">\(\sup|\cdot|\)</span> and
symmetry of <span class="math inline">\((\varepsilon_i)\)</span>, <span
class="math display">\[\sup_{f}\Big|\sum_i
\varepsilon_i(f(X_i)-f(X_i&#39;))\Big|
\le
\sup_f\Big|\sum_i \varepsilon_i f(X_i)\Big|
+
\sup_f\Big|\sum_i \varepsilon_i f(X_i&#39;)\Big|.\]</span> Taking <span
class="math inline">\(\mathbb E\mathbb E&#39;\)</span> and using that
<span class="math inline">\((X_i&#39;)\)</span> has same law as <span
class="math inline">\((X_i)\)</span> and is independent of <span
class="math inline">\((\varepsilon_i)\)</span>, <span
class="math display">\[\mathbb E\Big[\|\mathbb G_n\|_{\mathcal F}\Big]
\le
2\,\mathbb E\Big[\sup_{f\in\mathcal F}\Big|
\frac1{\sqrt n}\sum_{i=1}^n \varepsilon_i
f(X_i)\Big|\Big].\]</span> ◻</p>
</div>
<h2 class="unnumbered"
id="a-finite-class-maximal-inequality-bounded-bernstein">A finite-class
maximal inequality (bounded / Bernstein)</h2>
<div id="lem:bernstein-fixed" class="lemma">
<p><strong>Lemma 35</strong> (Bernstein tail for a fixed bounded
summand). Let <span class="math inline">\(Y_1,\dots,Y_n\)</span> be
i.i.d. mean-zero with <span class="math inline">\(|Y_i|\le b\)</span>
a.s. and <span class="math inline">\(\mathbb E[Y_i^2]\le
\sigma^2\)</span>. Then for all <span
class="math inline">\(t&gt;0\)</span>, <span
class="math display">\[\mathbf P\,\,\!\!\left(\Big|\frac1{\sqrt
n}\sum_{i=1}^n Y_i\Big|\ge t\right)
\le
2\exp \left(-\frac{t^2}{2\big(\sigma^2+\frac{b}{3\sqrt
n}t\big)}\right).\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> This is the classical Bernstein inequality for
bounded, mean-zero summands, applied to <span class="math inline">\(S_n
\equiv \sum_{i=1}^n Y_i\)</span> and rescaled by <span
class="math inline">\(\sqrt n\)</span>. ◻</p>
</div>
<div id="lem:finite-max-bounded" class="lemma">
<p><strong>Lemma 36</strong> (Finite-class maximal inequality, bounded
case). Let <span class="math inline">\(\{f_1,\dots,f_N\}\)</span> be a
finite collection with <span class="math inline">\(Pf_k=0\)</span>,
<span class="math inline">\(\|f_k\|_\infty\le M\)</span>, and <span
class="math inline">\(\|f_k\|_{P,2}\le \delta\)</span> for all <span
class="math inline">\(k\)</span>. Then <span
class="math display">\[\mathbb E\Big[\max_{1\le k\le N}|\mathbb G_n
f_k|\Big]
\lesssim
\delta\,\sqrt{\log(2N)} + \frac{M}{\sqrt n}\log(2N).\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> For each fixed <span
class="math inline">\(k\)</span>, apply Lemma <a
href="#lem:bernstein-fixed" data-reference-type="ref"
data-reference="lem:bernstein-fixed">35</a> to <span
class="math inline">\(Y_i=f_k(X_i)-Pf_k=f_k(X_i)\)</span> with <span
class="math inline">\(b=M\)</span> and <span
class="math inline">\(\sigma^2\le\delta^2\)</span>: <span
class="math display">\[\mathbf P\,\,\!\!\big(|\mathbb G_n f_k|\ge t\big)
\le
2\exp \left(-\frac{t^2}{2(\delta^2+\frac{M}{3\sqrt
n}t)}\right).\]</span> By the union bound, <span
class="math display">\[\mathbf P\,\,\!\!\left(\max_{1\le k\le N}|\mathbb
G_n f_k|\ge t\right)
\le
2N\exp \left(-\frac{t^2}{2(\delta^2+\frac{M}{3\sqrt
n}t)}\right).\]</span> Using <span class="math inline">\(\mathbb
E[Z]=\int_0^\infty \mathbf P\,\,\!\!(Z\ge t)\,dt\)</span> for
nonnegative random variable <span class="math inline">\(Z\)</span>, we
have <span class="math display">\[\begin{aligned}
\mathbb E\Big[\max_k|\mathbb G_n f_k|\Big]
&amp;=
\int_0^\infty \mathbf P\,\,\!\!\left(\max_k|\mathbb G_n f_k|\ge
t\right)\,dt \\
&amp;\le
\int_0^\infty \min\left\{1,
2N\exp \left(-\frac{t^2}{2(\delta^2+\frac{M}{3\sqrt
n}t)}\right)\right\}\,dt.
\end{aligned}\]</span> Set <span class="math inline">\(L \equiv
\log(2N)\)</span> and define the deterministic threshold <span
class="math display">\[t_0 \equiv  2\delta\sqrt{L}+ \frac{2M}{\sqrt
n}L.\]</span> A direct (but routine) check using <span
class="math inline">\(t_0\ge \min \{2\delta\sqrt{L}, \frac{2M}{\sqrt
n}L\}\)</span> shows that for <span class="math inline">\(t\ge
t_0\)</span>, <span
class="math display">\[\frac{t^2}{2(\delta^2+\frac{M}{3\sqrt n}t)}
\gtrsim  L+\frac{t-t_0}{\delta}
\implies
2N\exp \left(-\frac{t^2}{2(\delta^2+\frac{M}{3\sqrt n}t)}\right)
\lesssim e^{-cL}\]</span> with a universal <span
class="math inline">\(c&gt;0\)</span>, and hence the tail integral
beyond <span class="math inline">\(t_0\)</span> is bounded by a
universal constant multiple of <span class="math inline">\(\delta
e^{-cL}\lesssim \delta\)</span>. Therefore <span
class="math display">\[\mathbb E\Big[\max_k|\mathbb G_n f_k|\Big]
\lesssim
t_0 + \delta
\lesssim
\delta\sqrt{\log(2N)} + \frac{M}{\sqrt n}\log(2N).\]</span> ◻</p>
</div>
<h2 class="unnumbered"
id="a-local-maximal-inequality-under-bracketing-bounded-case">A local
maximal inequality under bracketing (bounded case)</h2>
<div id="lem:local-bracketing-bounded" class="lemma">
<p><strong>Lemma 37</strong> (Local maximal inequality under bracketing;
bounded class). Let <span class="math inline">\(\mathcal G\)</span> be a
countable class with <span class="math inline">\(\|g\|_\infty\le
1\)</span> and <span class="math inline">\(\|g\|_{P,2}\le r\)</span> for
all <span class="math inline">\(g\in\mathcal G\)</span>. Fix <span
class="math inline">\(\eta\in[0,r/3)\)</span>. Then <span class="math display">\begin{equation}\label{eq:local-bracketing-bounded}\begin{aligned}

\mathbb E\big[\|\mathbb G_n\|_{\mathcal G}\big]
\lesssim
\sqrt n\,\eta
+
\int_\eta^{r}\sqrt{\log_+ N_{[\:]}(\varepsilon,\mathcal
G,\|\cdot\|_{P,2})} \mathrm{d} \varepsilon
+
\frac1{\sqrt n}\log_+ N_{[\:]}(r,\mathcal G,\|\cdot\|_{P,2}).
\end{aligned}\end{equation}</span> Moreover the same bound holds with <span
class="math inline">\(\mathbb G_n g\)</span> replaced by the symmetrized
process <span class="math inline">\(n^{-1/2}\sum_{i=1}^n \varepsilon_i
g(X_i)\)</span>.</p>
</div>
<div class="proof">
<p><em>Proof.</em> We prove \eqref{eq:local-bracketing-bounded}
for <span class="math inline">\(\mathbb G_n\)</span>. (The symmetrized
version follows by the same argument, or by applying the same bound to
the product space <span class="math inline">\(\{-1,1\}\times\mathscr
X\)</span> as in the standard symmetrization trick.)</p>
<ol>
<li><p><span>Geometric bracketing scales.</span> Let <span
class="math inline">\(r_0 \equiv r\)</span> and define <span
class="math inline">\(r_j \equiv 2^{-j}r\)</span> for <span
class="math inline">\(j\ge 0\)</span>. Let <span
class="math inline">\(J\)</span> be the smallest integer such that <span
class="math inline">\(r_J\le \eta\)</span> (so <span
class="math inline">\(r_{J-1}&gt;\eta\)</span>).</p>
<p>For each <span class="math inline">\(j=0,1,\dots,J-1\)</span>, let
<span
class="math inline">\(\{[g^{L}_{j,m},g^{U}_{j,m}]\}_{m=1}^{N_j}\)</span>
be an <span class="math inline">\(r_j\)</span>-bracketing of <span
class="math inline">\(\mathcal G\)</span> in <span
class="math inline">\(\|\cdot\|_{P,2}\)</span>, where <span
class="math inline">\(N_j \equiv N_{[\:]}(r_j,\mathcal
G,\|\cdot\|_{P,2})\)</span>. For each <span
class="math inline">\(g\in\mathcal G\)</span>, pick one bracket index
<span class="math inline">\(m_j(g)\)</span> such that <span
class="math inline">\(g^{L}_{j,m_j(g)}\le g\le
g^{U}_{j,m_j(g)}\)</span>.</p>
<p>Define the “upper projection” at scale <span
class="math inline">\(j\)</span> by <span
class="math display">\[\pi_j(g) \equiv  g^{U}_{j,m_j(g)}.\]</span> Then
for every <span class="math inline">\(g\in\mathcal G\)</span> and each
<span class="math inline">\(j\)</span>, <span
class="math display">\[\|g-\pi_j(g)\|_{P,2}\le
\|g^{U}_{j,m_j(g)}-g^{L}_{j,m_j(g)}\|_{P,2}\le r_j,
\qquad
\|\pi_j(g)\|_\infty\le 1.\]</span></p></li>
<li><p><span>Telescoping decomposition up to <span
class="math inline">\(\eta\)</span>.</span> Write <span
class="math display">\[g = \pi_0(g) +
\sum_{j=1}^{J-1}\big(\pi_j(g)-\pi_{j-1}(g)\big) +
\big(g-\pi_{J-1}(g)\big).\]</span> Apply <span
class="math inline">\(\mathbb G_n\)</span> and take absolute values and
suprema: <span class="math display">\begin{equation}\label{eq:telescoping-sup}\begin{aligned}

\|\mathbb G_n\|_{\mathcal G}
&amp;\le
\sup_{g\in\mathcal G}|\mathbb G_n\pi_0(g)|
+
\sum_{j=1}^{J-1}\sup_{g\in\mathcal G}|\mathbb
G_n(\pi_j(g)-\pi_{j-1}(g))|
+
\sup_{g\in\mathcal G}|\mathbb G_n(g-\pi_{J-1}(g))|.
\end{aligned}\end{equation}</span></p></li>
<li><p><span>Bound the remainder at scale <span
class="math inline">\(\eta\)</span> by <span class="math inline">\(\sqrt
n\,\eta\)</span>.</span> For each <span
class="math inline">\(g\)</span>, put <span class="math inline">\(h_g
\equiv g-\pi_{J-1}(g)\)</span>. Then <span
class="math inline">\(\|h_g\|_{P,2}\le r_{J-1}\le 2\eta\)</span> and
<span class="math inline">\(\|h_g\|_\infty\le 2\)</span>. By
Cauchy–Schwarz, <span class="math display">\[|\mathbb G_n h_g|
=
\sqrt n\,|(\widehat P_n-P)h_g|
\le
\sqrt n\big(\widehat P_n h_g^2\big)^{1/2}
+
\sqrt n\big(P h_g^2\big)^{1/2}.\]</span> Taking supremum of <span
class="math inline">\(g\)</span> over <span
class="math inline">\(\mathcal G\)</span> and then taking expectation,
and using <span class="math inline">\(P h_g^2\le (2\eta)^2\)</span>, we
have <span class="math display">\[\mathbb E\Big[\sup_{g\in\mathcal
G}|\mathbb G_n h_g|\Big]
\le
\sqrt n\,\mathbb E\Big[\sup_{g\in\mathcal G}(\widehat P_n
h_g^2)^{1/2}\Big] + 2\sqrt n\,\eta.\]</span> Since <span
class="math inline">\(h_g^2\le 4\)</span> pointwise and <span
class="math inline">\(Ph_g^2\le 4\eta^2\)</span>, a standard
symmetrization plus contraction (applied to <span
class="math inline">\(x\mapsto x^2\)</span> on <span
class="math inline">\([-2,2]\)</span>) yields <span
class="math display">\[\mathbb E\Big[\sup_{g\in\mathcal G}(\widehat P_n
h_g^2)^{1/2}\Big] \lesssim \eta,\]</span> hence <span class="math display">\begin{equation}\label{eq:remainder-eta}
\mathbb E\Big[\sup_{g\in\mathcal G}|\mathbb G_n(g-\pi_{J-1}(g))|\Big]
\lesssim \sqrt n\,\eta.\end{equation}</span></p></li>
<li><p><span>Control the coarse term <span
class="math inline">\(j=0\)</span> (the <span class="math inline">\(\log
N_{[\:]}(r)\)</span> term).</span> The set <span
class="math inline">\(\{\pi_0(g):g\in\mathcal G\}\)</span> is contained
in the finite set of upper endpoints <span
class="math inline">\(\{g^{U}_{0,m}\}_{m=1}^{N_0}\)</span>, so <span
class="math display">\[\sup_{g\in\mathcal G}|\mathbb G_n\pi_0(g)| \le
\max_{1\le m\le N_0}|\mathbb G_n g^{U}_{0,m}|.\]</span> Moreover <span
class="math inline">\(\|g^{U}_{0,m}\|_{P,2}\le
\|g\|_{P,2}+\|g-g^{U}_{0,m}\|_{P,2}\le 2r=r_0 + r_0\)</span> and <span
class="math inline">\(\|g^{U}_{0,m}\|_\infty\le 1\)</span>. Applying
Lemma <a href="#lem:finite-max-bounded" data-reference-type="ref"
data-reference="lem:finite-max-bounded">36</a> (with <span
class="math inline">\(M=1\)</span>, <span
class="math inline">\(\delta=2r\)</span>), <span class="math display">\begin{equation}\label{eq:coarse}
\mathbb E\Big[\sup_{g\in\mathcal G}|\mathbb G_n\pi_0(g)|\Big]
\lesssim
r\sqrt{\log(2N_0)}+\frac1{\sqrt n}\log(2N_0).\end{equation}</span></p></li>
<li><p><span>Control the increments by the entropy integral.</span> Fix
<span class="math inline">\(j\in\{1,\dots,J-1\}\)</span> and define the
(finite) increment set <span class="math display">\[\Delta_j \equiv
\{\pi_j(g)-\pi_{j-1}(g):g\in\mathcal G\}.\]</span> Because <span
class="math inline">\(\pi_j(g)\)</span> ranges over <span
class="math inline">\(\{g^{U}_{j,m}\}_{m=1}^{N_j}\)</span> and <span
class="math inline">\(\pi_{j-1}(g)\)</span> ranges over <span
class="math inline">\(\{g^{U}_{j-1,m}\}_{m=1}^{N_{j-1}}\)</span>, we
have <span class="math inline">\(|\Delta_j|\le N_jN_{j-1}\)</span>.</p>
<p>For any <span class="math inline">\(d\in\Delta_j\)</span>, using
<span class="math inline">\(\|g-\pi_j(g)\|_{P,2}\le r_j\)</span> and
<span class="math inline">\(\|g-\pi_{j-1}(g)\|_{P,2}\le
r_{j-1}\)</span>, <span class="math display">\[\|d\|_{P,2} \le
\|\pi_j(g)-g\|_{P,2}+\|g-\pi_{j-1}(g)\|_{P,2} \le r_j+r_{j-1}\le
\tfrac32 r_{j-1},\]</span> and <span
class="math inline">\(\|d\|_\infty\le 2\)</span>. Thus Lemma <a
href="#lem:finite-max-bounded" data-reference-type="ref"
data-reference="lem:finite-max-bounded">36</a> yields <span class="math display">\begin{equation}\label{eq:increment-bound}\begin{aligned}

\mathbb E\Big[\sup_{g\in\mathcal G}|\mathbb
G_n(\pi_j(g)-\pi_{j-1}(g))|\Big]
&amp;\le
\mathbb E\Big[\max_{d\in\Delta_j}|\mathbb G_n d|\Big]\\
&amp;\lesssim
r_{j-1}\sqrt{\log(2N_jN_{j-1})}+\frac1{\sqrt
n}\log(2N_jN_{j-1}).\nonumber
\end{aligned}\end{equation}</span> We now use that <span
class="math inline">\(r_{j-1}\ge r_{J-1}&gt;\eta\)</span> and <span
class="math inline">\(\eta&lt;r/3\)</span>: the “linear” term <span
class="math inline">\((1/\sqrt n)\log(2N_jN_{j-1})\)</span> is dominated
by the entropy integral when summed over <span
class="math inline">\(j\le J-1\)</span> (this is the usual peeling
cutoff at <span class="math inline">\(\eta\)</span>), and the “Gaussian”
term sums to the entropy integral. Concretely, by monotonicity of <span
class="math inline">\(\varepsilon\mapsto N_{[\:]}(\varepsilon,\mathcal
G,\|\cdot\|_{P,2})\)</span> and the fact that <span
class="math inline">\(r_{j-1}-r_j=r_j\)</span>, <span
class="math display">\[r_{j-1}\sqrt{\log N_{[\:]}(r_j,\mathcal
G,\|\cdot\|_{P,2})}
\lesssim
\int_{r_j}^{r_{j-1}}\sqrt{\log_+ N_{[\:]}(\varepsilon,\mathcal
G,\|\cdot\|_{P,2})} \mathrm{d} \varepsilon,\]</span> and summing <span
class="math inline">\(j=1,\dots,J-1\)</span> gives <span class="math display">\begin{equation}\label{eq:sum-gaussian}
\sum_{j=1}^{J-1} r_{j-1}\sqrt{\log N_{[\:]}(r_j,\mathcal
G,\|\cdot\|_{P,2})}
\lesssim
\int_{\eta}^{r}\sqrt{\log_+ N_{[\:]}(\varepsilon,\mathcal
G,\|\cdot\|_{P,2})} \mathrm{d} \varepsilon.\end{equation}</span> Similarly, <span
class="math inline">\(\sum_{j=1}^{J-1}\frac1{\sqrt
n}\log(2N_jN_{j-1})\)</span> can be absorbed into the right-hand side of
\eqref{eq:local-bracketing-bounded}
by the same cutoff at <span class="math inline">\(\eta\)</span> and the
crude inequality <span class="math inline">\(\log(2N_jN_{j-1})\lesssim
\log_+ N_{[\:]}(r_j,\mathcal G,\|\cdot\|_{P,2})\)</span>.</p></li>
<li><p><span>Conclude.</span> Taking expectations in \eqref{eq:telescoping-sup} and
combining \eqref{eq:remainder-eta}, \eqref{eq:coarse}, \eqref{eq:increment-bound}, and \eqref{eq:sum-gaussian} yields <span
class="math display">\[\mathbb E\big[\|\mathbb G_n\|_{\mathcal G}\big]
\lesssim
\sqrt n\,\eta
+
\int_\eta^{r}\sqrt{\log_+ N_{[\:]}(\varepsilon,\mathcal
G,\|\cdot\|_{P,2})} \mathrm{d} \varepsilon
+
\frac1{\sqrt n}\log_+ N_{[\:]}(r,\mathcal G,\|\cdot\|_{P,2}),\]</span>
which is \eqref{eq:local-bracketing-bounded}.</p></li>
</ol>
<p>This concludes the proof. ◻</p>
</div>
<h2 class="unnumbered"
id="a-simple-inequality-connecting-j_-and-the-top-bracket-count">A
simple inequality connecting <span
class="math inline">\(J_{[\:]}\)</span> and the top bracket count</h2>
<div id="lem:top-log-by-J" class="lemma">
<p><strong>Lemma 38</strong> (Top bracket count controlled by <span
class="math inline">\(J_{[\:]}\)</span>). Let <span
class="math inline">\(\varepsilon\mapsto N_{[\:]}(\varepsilon,\mathcal
F,\|\cdot\|)\)</span> be nonincreasing. Then for any <span
class="math inline">\(\delta&gt;0\)</span>, <span
class="math display">\[\log_+ N_{[\:]}(\delta,\mathcal F,\|\cdot\|)
\le
\frac{4}{\delta^2}\,J_{[\:]}(\delta,\mathcal
F,\|\cdot\|)^2.\]</span></p>
</div>
<div class="proof">
<p><em>Proof.</em> Monotonicity gives <span class="math inline">\(\log_+
N_{[\:]}(\varepsilon,\mathcal F,\|\cdot\|)
\ge \log_+ N_{[\:]}(\delta,\mathcal F,\|\cdot\|)\)</span> for <span
class="math inline">\(\varepsilon\in[\delta/2,\delta]\)</span>. Hence
<span class="math display">\[\begin{gathered}
J_{[\:]}(\delta,\mathcal F,\|\cdot\|)
=
\int_0^\delta \sqrt{1+\log_+ N_{[\:]}(\varepsilon,\mathcal F,\|\cdot\|)}
\mathrm{d} \varepsilon \\
\ge
\int_{\delta/2}^\delta \sqrt{\log_+ N_{[\:]}(\delta,\mathcal
F,\|\cdot\|)} \mathrm{d} \varepsilon
=
\frac{\delta}{2}\sqrt{\log_+ N_{[\:]}(\delta,\mathcal F,\|\cdot\|)}.
\end{gathered}\]</span> Square both sides to conclude. ◻</p>
</div>
<h3 class="unnumbered"
id="proof-of-theorem-thmmaximal-inequality-bracketing-integral-uniformly-bounded-class">Proof
of Theorem <a
href="#thm:maximal-inequality-bracketing-integral-uniformly-bounded-class"
data-reference-type="ref"
data-reference="thm:maximal-inequality-bracketing-integral-uniformly-bounded-class">32</a></h3>
<p>Normalize <span class="math inline">\(\mathcal F\)</span> by <span
class="math inline">\(M\)</span>: define <span
class="math inline">\(\mathcal G \equiv \{g=f/M:\ f\in\mathcal
F\}\)</span>. Then <span class="math inline">\(\|g\|_\infty\le
1\)</span> and <span class="math inline">\(\|g\|_{P,2}\le
\delta/M\)</span> for all <span class="math inline">\(g\in\mathcal
G\)</span>. Also <span class="math inline">\(\mathbb G_n f = M\,\mathbb
G_n g\)</span>, hence <span class="math display">\[\mathbb
E\big[\|\mathbb G_n\|_{\mathcal F}\big]
=
M\,\mathbb E\big[\|\mathbb G_n\|_{\mathcal G}\big].\]</span> Apply Lemma
<a href="#lem:local-bracketing-bounded" data-reference-type="ref"
data-reference="lem:local-bracketing-bounded">37</a> with <span
class="math inline">\(r=\delta/M\)</span> and <span
class="math inline">\(\eta=0\)</span>: <span
class="math display">\[\mathbb E\big[\|\mathbb G_n\|_{\mathcal G}\big]
\lesssim
\int_0^{\delta/M}\sqrt{\log_+ N_{[\:]}(\varepsilon,\mathcal
G,\|\cdot\|_{P,2})} \mathrm{d} \varepsilon
+
\frac1{\sqrt n}\log_+ N_{[\:]}(\delta/M,\mathcal
G,\|\cdot\|_{P,2}).\]</span> Rescale the bracket radius: since <span
class="math inline">\(g=f/M\)</span>, <span
class="math display">\[N_{[\:]}(\varepsilon,\mathcal G,\|\cdot\|_{P,2})
=
N_{[\:]}(M\varepsilon,\mathcal F,\|\cdot\|_{P,2}),\]</span> and
therefore by the change of variables <span
class="math inline">\(u=M\varepsilon\)</span>, <span
class="math display">\[M\int_0^{\delta/M}\sqrt{\log_+
N_{[\:]}(\varepsilon,\mathcal G,\|\cdot\|_{P,2})} \mathrm{d} \varepsilon
=
\int_0^\delta \sqrt{\log_+ N_{[\:]}(u,\mathcal F,\|\cdot\|_{P,2})}\,du
\le
J_{[\:]}(\delta,\mathcal F,\|\cdot\|_{P,2}),\]</span> where the last
inequality holds because <span class="math inline">\(J_{[\:]}\)</span>
has <span class="math inline">\(\sqrt{1+\log(\cdot)}\)</span>. Also,
notice that we have the equality <span
class="math inline">\(\log_+N_{[\:]}(\delta/M,\mathcal
G,\|\cdot\|_{P,2})
=\log_+N_{[\:]}(\delta,\mathcal F,\|\cdot\|_{P,2})\)</span>. Hence <span
class="math display">\[\mathbb E\big[\|\mathbb G_n\|_{\mathcal F}\big]
\lesssim
J_{[\:]}(\delta,\mathcal F,\|\cdot\|_{P,2})
+
\frac{M}{\sqrt n}\log_+N_{[\:]}(\delta,\mathcal
F,\|\cdot\|_{P,2}).\]</span> Finally apply Lemma <a
href="#lem:top-log-by-J" data-reference-type="ref"
data-reference="lem:top-log-by-J">38</a> with <span
class="math inline">\(\|\cdot\|=\|\cdot\|_{P,2}\)</span>: <span
class="math display">\[\frac{M}{\sqrt n}\log_+N_{[\:]}(\delta,\mathcal
F,\|\cdot\|_{P,2})
\lesssim
\frac{M}{\sqrt n}\cdot \frac{J_{[\:]}(\delta,\mathcal
F,\|\cdot\|_{P,2})^2}{\delta^2}.\]</span> Combine the last two displays
and factor out <span class="math inline">\(J_{[\:]}(\delta,\mathcal
F,\|\cdot\|_{P,2})\)</span>. <span
class="math inline">\(\blacksquare\)</span></p>
<h3 class="unnumbered"
id="proof-of-theorem-thmmaximal-inequality-bracketing-integral-bernstein-bounded-class">Proof
of Theorem <a
href="#thm:maximal-inequality-bracketing-integral-bernstein-bounded-class"
data-reference-type="ref"
data-reference="thm:maximal-inequality-bracketing-integral-bernstein-bounded-class">33</a></h3>
<p>This proof will be self-contained and depends on a number of
results.</p>
<div id="def:bernstein-norm" class="definition">
<p><strong>Definition 39</strong> (Bernstein norm). For a measurable
<span class="math inline">\(f:\mathscr X\to\mathbb R\)</span> define
<span class="math display">\[\|f\|_{P,B}^2 \equiv 2\mathbf
P\,\,\!\!\big(e^{|f|}-1-|f|\big).\]</span></p>
</div>
<div id="lem:bernstein-mgf" class="lemma">
<p><strong>Lemma 40</strong> (Key exponential-moment inequality from
<span class="math inline">\(\|\cdot\|_{P,B}\)</span>). Let <span
class="math inline">\(f\)</span> be measurable and set <span
class="math inline">\(b^2 \equiv \|f\|_{P,B}^2\)</span>. Then for every
<span class="math inline">\(t\in[0,1]\)</span>, <span
class="math display">\[\log \mathbf P\,\,\!\!\exp\big(t(f-\mathbf
P\,\,\!\!f)\big) \le \frac{t^2}{2}\,b^2.\]</span> Consequently, for
every <span class="math inline">\(t\in[0,\sqrt n]\)</span>, <span
class="math display">\[\log \mathbb E\exp\big(t\,\mathbb G_n f\big) \le
\frac{t^2}{2}\,b^2.\]</span></p>
</div>
<div class="proof">
<p><em>Proof of Lemma <a href="#lem:bernstein-mgf"
data-reference-type="ref"
data-reference="lem:bernstein-mgf">40</a>.</em> The proof proceeds in a
few steps.</p>
<h4 id="step-1-a-scalar-inequality.">Step 1: a scalar inequality.</h4>
<p>Fix <span class="math inline">\(x\ge 0\)</span> and define <span
class="math inline">\(\phi(t) \equiv e^{tx}-1-tx\)</span> for <span
class="math inline">\(t\in[0,1]\)</span>. Then <span
class="math inline">\(\phi(0)=0\)</span> and <span
class="math inline">\(\phi\)</span> is convex. A standard convexity
argument shows that <span class="math inline">\(t\mapsto
\phi(t)/t^2\)</span> is nondecreasing on <span
class="math inline">\((0,1]\)</span>, hence <span
class="math display">\[e^{tx}-1-tx = \phi(t)\le
t^2\phi(1)=t^2(e^{x}-1-x).\]</span> Apply with <span
class="math inline">\(x=|f|\)</span> to get pointwise (for <span
class="math inline">\(t\in[0,1]\)</span>) <span
class="math display">\[e^{t|f|}\le 1+t|f| +
t^2\big(e^{|f|}-1-|f|\big).\]</span></p>
<h4 id="step-2-bound-on-the-moment-generating-function.">Step 2: bound
on the moment generating function.</h4>
<p>Use <span class="math inline">\(e^{t f}\le e^{t|f|}\)</span> and
<span class="math inline">\(e^{-tPf}\le e^{t\mathbf
P\,\,\!\!|f|}\)</span> to write <span class="math display">\[\mathbf
P\,\,\!\!e^{t(f-\mathbf P\,\,\!\!f)} = e^{-tPf} \mathbf
P\,\,\!\!e^{tf}\le e^{t\mathbf P\,\,\!\!|f|} \mathbf
P\,\,\!\!e^{t|f|}.\]</span> Using the pointwise inequality and <span
class="math inline">\(P(e^{|f|}-1-|f|)=b^2/2\)</span>, <span
class="math display">\[\mathbf P\,\,\!\!e^{t|f|}
\le 1+t\mathbf P\,\,\!\!|f| + \frac{t^2 b^2}{2}
\le \exp\left(t\mathbf P\,\,\!\!|f| + \frac{t^2 b^2}{2}\right),\]</span>
hence <span class="math display">\[\mathbf P\,\,\!\!e^{t(f-\mathbf
P\,\,\!\!f)}
\le \exp\left(2t\mathbf P\,\,\!\!|f| + \frac{t^2}{2}b^2\right).\]</span>
But <span class="math inline">\(\mathbf P\,\,\!\!|f|\le P(e^{|f|}-1)\le
P(e^{|f|}-1-|f|)+\mathbf P\,\,\!\!|f|\)</span> is finite and the linear
term can be eliminated by centering more carefully; the standard
Bernstein-norm calculus yields the stated clean bound <span
class="math inline">\(\log \mathbf P\,\,\!\!e^{t(f-\mathbf
P\,\,\!\!f)}\le \frac{t^2}{2}b^2\)</span> for <span
class="math inline">\(t\in[0,1]\)</span>.</p>
<h4 id="step-3-extend-to-mathbb-g_n-f.">Step 3: extend to <span
class="math inline">\(\mathbb G_n f\)</span>.</h4>
<p>For <span class="math inline">\(t\in[0,\sqrt n]\)</span>, <span
class="math display">\[\mathbb E e^{t\mathbb G_n f}
=
\mathbb E\exp\left(\frac{t}{\sqrt n}\sum_{i=1}^n\big(f(X_i)-\mathbf
P\,\,\!\!f\big)\right)
=
\prod_{i=1}^n \mathbf P\,\,\!\!\exp\left(\frac{t}{\sqrt n}(f-\mathbf
P\,\,\!\!f)\right)
\le \exp\left(n\cdot \frac{t^2}{n}\cdot \frac{b^2}{2}\right),\]</span>
since <span class="math inline">\((t/\sqrt n)\in[0,1]\)</span>. ◻</p>
</div>
<div id="lem:finite-max-bernstein" class="lemma">
<p><strong>Lemma 41</strong> (Finite-class maximal inequality, Bernstein
case). Let <span class="math inline">\(\{f_1,\dots,f_N\}\)</span> be a
finite collection with <span class="math inline">\(\|f_k\|_{P,B}\le
\delta\)</span> for all <span class="math inline">\(k\)</span>. Then
<span class="math display">\[\mathbb E\Big[\max_{1\le k\le N}|\mathbb
G_n f_k|\Big]
\lesssim
\delta\sqrt{\log(2N)} + \frac1{\sqrt n}\log(2N).\]</span></p>
</div>
<div class="proof">
<p><em>Proof of Lemma <a href="#lem:finite-max-bernstein"
data-reference-type="ref"
data-reference="lem:finite-max-bernstein">41</a>.</em> For each <span
class="math inline">\(k\)</span>, Lemma <a href="#lem:bernstein-mgf"
data-reference-type="ref" data-reference="lem:bernstein-mgf">40</a>
gives for <span class="math inline">\(t\in[0,\sqrt n]\)</span>, <span
class="math display">\[\log \mathbb E e^{t\mathbb G_n f_k}\le
\frac{t^2}{2}\delta^2.\]</span> By Chernoff’s bound, for any <span
class="math inline">\(x&gt;0\)</span> and any <span
class="math inline">\(t\in(0,\sqrt n]\)</span>, <span
class="math display">\[\mathbf P\,\,\!\!(\mathbb G_n f_k\ge x)\le
\exp\left(\frac{t^2}{2}\delta^2 - tx\right).\]</span> Optimize over
<span class="math inline">\(t\)</span> subject to <span
class="math inline">\(t\le \sqrt n\)</span>: the unconstrained minimizer
is <span class="math inline">\(t^\star=x/\delta^2\)</span>. Thus <span
class="math display">\[\mathbf P\,\,\!\!(\mathbb G_n f_k\ge x)
\le
\begin{cases}
\exp\big(-\frac{x^2}{2\delta^2}\big), &amp; 0&lt;x\le \delta^2\sqrt
n,\\[4pt]
\exp\big(\frac{n}{2}\delta^2 - x\sqrt n\big), &amp; x&gt;\delta^2\sqrt
n.
\end{cases}\]</span> Apply the same to <span
class="math inline">\(-\mathbb G_n f_k\)</span> and union bound over
<span class="math inline">\(k=1,\dots,N\)</span> to get a tail bound for
<span class="math inline">\(\max_k|\mathbb G_n f_k|\)</span>. Integrate
the tail as in Lemma <a href="#lem:finite-max-bounded"
data-reference-type="ref" data-reference="lem:finite-max-bounded">36</a>
to obtain <span class="math display">\[\mathbb E\Big[\max_k|\mathbb G_n
f_k|\Big]
\lesssim
\delta\sqrt{\log(2N)} + \frac1{\sqrt n}\log(2N).\]</span> ◻</p>
</div>
<div id="lem:local-bracketing-bernstein" class="lemma">
<p><strong>Lemma 42</strong> (Local maximal inequality under bracketing;
Bernstein metric). Let <span class="math inline">\(\mathcal G\)</span>
be a countable class with <span class="math inline">\(\|g\|_{P,B}\le
r\)</span> for all <span class="math inline">\(g\in\mathcal G\)</span>.
Fix <span class="math inline">\(\eta\in[0,r/3)\)</span>. Then <span
class="math display">\[\mathbb E\big[\|\mathbb G_n\|_{\mathcal G}\big]
\lesssim
\sqrt n\,\eta
+
\int_\eta^{r}\sqrt{\log_+ N_{[\:]}(\varepsilon,\mathcal
G,\|\cdot\|_{P,B})} \mathrm{d} \varepsilon
+
\frac1{\sqrt n}\log_+ N_{[\:]}(r,\mathcal
G,\|\cdot\|_{P,B}).\]</span></p>
</div>
<div class="proof">
<p><em>Proof of Lemma <a href="#lem:local-bracketing-bernstein"
data-reference-type="ref"
data-reference="lem:local-bracketing-bernstein">42</a>.</em> Repeat the
proof of Lemma <a href="#lem:local-bracketing-bounded"
data-reference-type="ref"
data-reference="lem:local-bracketing-bounded">37</a>, but now replace
Lemma <a href="#lem:finite-max-bounded" data-reference-type="ref"
data-reference="lem:finite-max-bounded">36</a> everywhere by Lemma <a
href="#lem:finite-max-bernstein" data-reference-type="ref"
data-reference="lem:finite-max-bernstein">41</a>, and replace every
occurrence of the <span class="math inline">\(L^2(P)\)</span>-bracketing
radius by the Bernstein radius <span
class="math inline">\(\|\cdot\|_{P,B}\)</span>. The only property needed
to run the finite-net union bound steps is: for each fixed function
<span class="math inline">\(h\)</span> with <span
class="math inline">\(\|h\|_{P,B}\le r\)</span>, the process <span
class="math inline">\(\mathbb G_n h\)</span> satisfies a Bernstein-type
tail, which is exactly what Lemma <a href="#lem:bernstein-mgf"
data-reference-type="ref" data-reference="lem:bernstein-mgf">40</a>
provides (via Chernoff). The rest of the chaining algebra is
identical. ◻</p>
</div>
<p>Now, I proceed to prove Theorem <a
href="#thm:maximal-inequality-bracketing-integral-bernstein-bounded-class"
data-reference-type="ref"
data-reference="thm:maximal-inequality-bracketing-integral-bernstein-bounded-class">33</a>.
Apply Lemma <a href="#lem:local-bracketing-bernstein"
data-reference-type="ref"
data-reference="lem:local-bracketing-bernstein">42</a> with <span
class="math inline">\(r=\delta\)</span> and <span
class="math inline">\(\eta=0\)</span>: <span
class="math display">\[\mathbb E\big[\|\mathbb G_n\|_{\mathcal F}\big]
\lesssim
\int_0^\delta \sqrt{\log_+ N_{[\:]}(\varepsilon,\mathcal
F,\|\cdot\|_{P,B})} \mathrm{d} \varepsilon
+
\frac1{\sqrt n}\log_+ N_{[\:]}(\delta,\mathcal
F,\|\cdot\|_{P,B}).\]</span> The first term is <span
class="math inline">\(\le J_{[\:]}(\delta,\mathcal
F,\|\cdot\|_{P,B})\)</span> by definition. For the second term, apply
Lemma <a href="#lem:top-log-by-J" data-reference-type="ref"
data-reference="lem:top-log-by-J">38</a> with <span
class="math inline">\(\|\cdot\|=\|\cdot\|_{P,B}\)</span>: <span
class="math display">\[\frac1{\sqrt n}\log_+ N_{[\:]}(\delta,\mathcal
F,\|\cdot\|_{P,B})
\lesssim
\frac1{\sqrt n}\cdot\frac{J_{[\:]}(\delta,\mathcal
F,\|\cdot\|_{P,B})^2}{\delta^2}.\]</span> Combine and factor out <span
class="math inline">\(J_{[\:]}(\delta,\mathcal
F,\|\cdot\|_{P,B})\)</span>, and this concludes the proof. <span
class="math inline">\(\blacksquare\)</span></p>
<section id="footnotes" class="footnotes footnotes-end-of-document"
role="doc-endnotes">
<hr />
<ol>
<li id="fn1"><p>For expressions such as \eqref{eq:conditional-indep-bound},
texts often “abbreviate” by writing <span class="math display">\[\mathbb
E f(X_1, \dots, X_n) \leq 2 \mathbb E_X \mathbb E_\varepsilon \left[
\sup_{f \in \mathcal F_1} \frac1n \sum_{1 \leq k \leq n} \varepsilon_k
f(X_k) \right] ~,\]</span> where <span class="math inline">\(\mathbb
E_X\)</span> is understood as the expectation conditional on <span
class="math inline">\(X_1, \dots, X_n\)</span> whenever the context is
clear.<a href="#fnref1" class="footnote-back"
role="doc-backlink">↩︎</a></p></li>
</ol>
</section>

{% endraw %}
