<!-- hospital_transform.xslt -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Hospital Records</title>
                <link rel="stylesheet" type="text/css" href="style.css"/>
            </head>
            <body>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="hospital">
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="patient">
        <div class="patient">
            <xsl:apply-templates/>
        </div>
    </xsl:template>

    <xsl:template match="id">
        <p>ID: <xsl:value-of select="."/></p>
    </xsl:template>

    <xsl:template match="name">
        <p>Name: <xsl:value-of select="."/></p>
    </xsl:template>

    <xsl:template match="age">
        <p>Age: <xsl:value-of select="."/></p>
    </xsl:template>

    <xsl:template match="gender">
        <p>Gender: <xsl:value-of select="."/></p>
    </xsl:template>

    <xsl:template match="diagnosis">
        <p>Diagnosis: <xsl:value-of select="."/></p>
    </xsl:template>
</xsl:stylesheet>